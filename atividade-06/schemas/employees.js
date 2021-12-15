const Joi = require('joi')
  .extend(require('@joi/date'))

const fieldsValidate = {
  EmployeeID: Joi.number()
    .integer()
    .positive(),

  LastName: Joi.string()
    .min(3)
    .max(20)
    .trim(),

  FirstName: Joi.string()
    .min(3)
    .max(10)
    .trim(),

  Title: Joi.string()
    .max(30)
    .trim(),

  TitleOfCourtesy: Joi.string()
    .max(25)
    .trim(),

  BirthDate: Joi.date()
    .format('YYYY-MM-DD')
    .raw(),

  HireDate: Joi.date()
    .format('YYYY-MM-DD')
    .raw(),

  Address: Joi.string()
    .max(60)
    .trim(),

  City: Joi.string()
    .max(15)
    .trim(),

  Region: Joi.string()
    .max(15)
    .trim(),

  PostalCode: Joi.string()
    .max(10)
    .trim(),

  Country: Joi.string()
    .max(15)
    .trim(),

  HomePhone: Joi.string()
    .max(24)
    .trim(),

  Extension: Joi.string()
    .max(4)
    .trim(),

  Notes: Joi.string()
    .trim(),

  ReportsTo: Joi.number()
    .integer()
    .positive(),

  PhotoPath: Joi.string()
    .max(255)
    .trim(),

  Salary: Joi.number()
    .positive()
}

const requiredColumns = [
  'EmployeeID',
  'LastName',
  'FirstName',
  'Notes'
]

const identity = 'EmployeeID'

module.exports = {
  table: 'employees',
  identity,
  fieldsValidate,
  requiredColumns,
  columns: Object.keys(fieldsValidate)
}

