// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.register(require('./db'))
fastify.register(require('./shipping'))
fastify.register(require('./stripe'))
fastify.register(require('./coinbase'))
fastify.register(require('./test'))

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
