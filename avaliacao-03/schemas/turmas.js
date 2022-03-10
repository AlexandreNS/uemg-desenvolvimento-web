const Joi = require('joi')
  .extend(require('@joi/date'))

const fieldsValidate = {
  id_turma: Joi.number()
    .integer()
    .positive(),

  nome_turma: Joi.string()
    .min(3)
    .max(50)
    .trim(),

  curso: Joi.string()
    .min(3)
    .max(50)
    .trim(),

  data_inicio: Joi.date()
    .format(['YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss'])
    .raw()
}

const requiredColumns = [
  'id_turma',
  'nome_turma',
  'curso',
  'data_inicio'
]

const identity = 'id_turma'

module.exports = {
  table: 'turmas',
  identity,
  fieldsValidate,
  requiredColumns,
  columns: Object.keys(fieldsValidate)
}

