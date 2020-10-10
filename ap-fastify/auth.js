async function auth(fastify, options) {
  const bcrypt = require("bcrypt");
  const Joi = require("joi");
  const axios = require("axios");

  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });

  fastify.get("/auth", async (request, reply) => {
    return { hello: "world" };
  });
  fastify.post("/auth/register", async (req, reply) => {
    let nakedPass = req.body.password;
    let hashedPass = "";

    let credentials = {
      username: req.body.username,
      email: req.body.email,
      password: `${nakedPass}`,
    };
    const validation = schema.validate(credentials);
    if (validation.error) {
      console.log(validation.error.details[0].message);
    } else {
      console.log("no errors in validation");

      await bcrypt.hash(`${nakedPass}`, 10, function (err, hash) {
        hashedPass = hash;
        credentials.password = `${hash}`;
        axios
          .post("http://localhost:3000/db/user/register", credentials)
          .then(function (response) {
            //console.log(response.data)
            if (response.data === 1) {
              reply.send("successfully saved user to db");
            } else {
              console.log(response);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    }
  });
}

module.exports = auth;
