async function test (fastify, options) {
  fastify.get('/test', async (request, reply) => {
    reply.send(request)
  })
}

module.exports = test
