async function db(fastify, options) {
  const { Sequelize, DataTypes } = require("sequelize");
  const sequelize = new Sequelize(
    "mysql://doadmin:s8392dglpeju18ne@db1-deuxfractales-do-user-7211070-0.a.db.ondigitalocean.com:25060/asuras-path?ssl-mode=REQUIRED"
  );

  fastify.get("/db/test", async (request, reply) => {
    try {
      await sequelize.authenticate();
      reply.send("Connection has been established successfully.");
    } catch (error) {
      reply.send("Unable to connect to the database:", error);
    }
  });

  fastify.post("/db/user/register", async (request, reply) => {
    const User = sequelize.define(
      "User",
      {
        username: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
      },
      {
        timestamps: false,
      }
    );
    try {
      const newUser = await User.create({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
      });
      reply.send(1);
    } catch (e) {
      /* handle error */
      reply.send(e);
    }

    //console.log(request.body)
  });
}

module.exports = db;
