const { routerModelBuilder } = require('../helpers/route')
const schema = require('../schemas/region')

const router = routerModelBuilder(schema)

module.exports = router;
