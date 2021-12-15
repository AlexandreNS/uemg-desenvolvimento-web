const Joi = require('joi')
  .extend(require('@joi/date'))

const fieldsValidate = {
  CategoryID: Joi.number()
    .integer()
    .positive(),

  CategoryName: Joi.string()
    .min(3)
    .max(15)
    .trim(),

  Description: Joi.string()
    .trim()
}

const requiredColumns = [
  'CategoryID',
  'CategoryName'
]

const identity = 'CategoryID'

module.exports = {
  table: 'categories',
  identity,
  fieldsValidate,
  requiredColumns,
  columns: Object.keys(fieldsValidate)
}