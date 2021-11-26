const express = require('express')
const router = express.Router()
const database = require('../services/database')

const schema = require('../schemas/employees')

const validateGetParams = (req, res, next) => {
  try {
    res.locals.collumns = schema.collumns.slice(0, 4)
    res.locals.limit = null
    res.locals.order = [{ collumn: 'EmployeeID', sort: 'ASC' }]

    if (req.query.collumns) {
      const collumns = req.query.collumns?.split(',')
        .map(collumn => collumn.trim())
        .filter(collumn => schema.collumns.includes(collumn));

      res.locals.collumns = collumns?.length ? collumns : res.locals.collumns
    }

    if (req.query.order) {
      const order = req.query.order?.split(',')
        .map(item => {
          const [collumn, sort] = item.trim().split('|')
          return {
            collumn,
            sort: ['ASC', 'DESC'].includes(sort?.toUpperCase()) ? sort.toUpperCase() : 'ASC'
          }
        })
        .filter(item => schema.collumns.includes(item.collumn));

      res.locals.order = order?.length ? order : res.locals.order
    }

    if (req.query.limit) {
      res.locals.limit = Number(req.query.limit) || null
    }

    next()
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(400).json({ error: 'Unknown error' })
    }
  }
}

router.get('/', validateGetParams, async (req, res) => {
  const { collumns, limit, order } = res.locals

  const limitSql = {
    toSqlString: () => limit ? `LIMIT ${limit}` : ''
  }
  const orderSql = {
    toSqlString: () => order ?
      `ORDER BY ${order.map(({ collumn, sort }) => `${collumn} ${sort}`).join(',')}` : ''
  }

  database.query(
    'SELECT ?? FROM employees ? ?',
    [collumns, orderSql, limitSql],
    (error, results) => {
      if (error) return res.status(400).json({ error })
      res.send(results)
    }
  )
})

router.get('/:id', validateGetParams, async (req, res) => {
  const { collumns } = res.locals

  const id = Number(req.params.id) || null

  if (!id) return res.status(400).json({ error: "Required int parameter 'id' is not present" })

  database.query(
    'SELECT ?? FROM employees WHERE EmployeeID = ?', [collumns, id],
    (error, results) => {
      if (error) return res.status(400).json({ error })
      if (!results?.length) return res.status(400).json({ error: `No records were found with EmployeeID = ${id}` })
      res.send(results[0])
    }
  )
})

module.exports = router;
