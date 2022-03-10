const Joi = require('joi')
  .extend(require('@joi/date'))

const fieldsValidate = {
  id_aluno: Joi.number()
    .integer()
    .positive(),

  id_turma: Joi.number()
    .integer()
    .positive(),

  nome_aluno: Joi.string()
    .min(3)
    .max(255)
    .trim(),

  data_matricula: Joi.date()
    .format(['YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss'])
    .raw()
}

const requiredColumns = [
  'id_aluno',
  'id_turma',
  'nome_aluno',
  'data_matricula'
]

const identity = 'id_aluno'

module.exports = {
  table: 'alunos',
  identity,
  fieldsValidate,
  requiredColumns,
  columns: Object.keys(fieldsValidate)
}

