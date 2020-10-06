async function stripe (fastify, options) {
  fastify.get('/stripe', async (request, reply) => {
    return { hello: 'world' }
  })
}

module.exports = stripe
