const { routerModelBuilder } = require('../helpers/route')
const schema = require('../schemas/turmas')

const router = routerModelBuilder(
  schema, 40
)

module.exports = router;
