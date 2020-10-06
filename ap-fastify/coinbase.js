
async function coinbase (fastify, options) {

  fastify.get('/coinbase', async (request, reply) => {
    return { hello: 'world' }
  })
}

module.exports = coinbase
