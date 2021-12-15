const Joi = require('joi')
  .extend(require('@joi/date'))

const fieldsValidate = {
  RegionID: Joi.number()
    .integer()
    .positive(),

  RegionDescription: Joi.string()
    .min(3)
    .max(50)
    .trim()
}

const requiredColumns = [
  'RegionID',
  'RegionDescription'
]

const identity = 'RegionID'

module.exports = {
  table: 'region',
  identity,
  noDefaultValueIdentity: true,
  fieldsValidate,
  requiredColumns,
  columns: Object.keys(fieldsValidate)
}