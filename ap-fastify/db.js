async function db (fastify, options) {
    //fastify.register(require('fastify-mysql'), {
        //connectionString: 'mysql://ace:bnhepos34q0dnu6p@private-db1-deuxfractales-do-user-7211070-0.a.db.ondigitalocean.com:25060/asuras-path'
    //})

  fastify.get('/db', async (request, reply) => {
    return { hello: 'world' }
  })
}

module.exports = db
