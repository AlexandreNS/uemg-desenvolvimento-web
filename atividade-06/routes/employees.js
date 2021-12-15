const { routerModelBuilder } = require('./../helpers/route')
const schema = require('./../schemas/employees')

const router = routerModelBuilder(schema)

module.exports = router;
