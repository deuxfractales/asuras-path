// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

fastify.register(require('fastify-cors'), {
  // put your options here
  // origin: `http://${process.env.IP}:8080`,
  origin: `http://localhost:8080`,
  methods: ['GET,PUT,POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
});


// Declare a route
fastify.register(require("./db"));
fastify.register(require("./auth"));
fastify.register(require("./shipping"));
fastify.register(require("./stripe"));
fastify.register(require("./coinbase"));
fastify.register(require("./test"));

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
