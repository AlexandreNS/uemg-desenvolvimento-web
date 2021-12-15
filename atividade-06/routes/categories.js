const { routerModelBuilder } = require('../helpers/route')
const schema = require('../schemas/categories')

const router = routerModelBuilder(schema)

module.exports = router;
