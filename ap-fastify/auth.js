async function auth (fastify, options) {
  const bcrypt = require('bcrypt')

  fastify.get('/auth', async (request, reply) => {
    return { hello: 'world' }
  })
  fastify.post('/auth/register', async (req,reply) => {
   
    let nakedPass = req.body.password 
    let hashedPass = ''

    let credentials = {
        username: req.body.username,
        email: req.body.email,
        password: ''
    }
    await bcrypt.hash(`${nakedPass}`, 10, function(err, hash) {
        hashedPass = hash
        reply.send(hashedPass)
    });
  })
}

module.exports = auth
