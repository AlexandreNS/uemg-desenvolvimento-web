const { routerModelBuilder } = require('../helpers/route')
const database = require('../services/database')
const schema = require('../schemas/alunos')
const schemaTurmas = require('../schemas/turmas')

const existTurmaID = (req, res, next) => {
  try {
    const id_turma = Number(req.body.id_turma) || null
    if (id_turma === null) return next()

    database.query(
      `SELECT id_turma FROM Turmas WHERE id_turma = ?`,
      [id_turma],
      (error, results) => {
        if (error) return res.status(400).json({ error })
        if (results?.length) return next()
        return res.status(400).json({ error: 'Não existe uma Turma com o id: ' + id_turma })
      }
    )

  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(400).json({ error: 'Unknown error' })
    }
  }
}

const router = routerModelBuilder(
  schema, 40,
  {
    insert: [existTurmaID],
    update: [existTurmaID]
  }
)

router.get('/:id/turma', async (req, res) => {
  const id = Number(req.params.id) || null
  const columns = schema.columns.filter(column => !schemaTurmas.columns.includes(column))

  if (!id) return res.status(400).json({ error: "Required int parameter 'id' is not present" })

  database.query(
    `SELECT ??, ?? FROM ${schema.table} a
      INNER JOIN ${schemaTurmas.table} tm ON tm.id_turma = a.id_turma
    WHERE ${schema.identity} = ?`,
    [columns, schemaTurmas.columns.map(column => `tm.${column}`), id],
    (error, results) => {
      if (error) return res.status(400).json({ error })
      if (!results?.length) return res.status(404).json({ error: `No records were found with ${schema.identity} = ${id}` })
      res.send(results[0])
    }
  )
})
module.exports = router;
