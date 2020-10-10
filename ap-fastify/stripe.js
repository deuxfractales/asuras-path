async function stripe(fastify, options) {
  const Stripe = require("stripe");
  const stripe = Stripe(
    "sk_test_51HPibVKRlkNsphUI7E8xkr5CoQcWbZ8l8F2JBmqHlwpOcppkq4LH4acINPkRk5lf0YyD57wOctoiWymxupiJZL0e00wAVBC3V8"
  );

  fastify.get("/stripe", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.post("/stripe/onboard/1", async (request, reply) => {
    const account = await stripe.accounts.create({
      type: "express",
    });

    const accountLinks = await stripe.accountLinks.create({
      account: `${account.id}`,
      refresh_url: "https://example.com/reauth",
      return_url: "https://example.com/return",
      type: "account_onboarding",
    });
    console.log(account);
    reply.send({
      route: "stripe onboarding",
      msg: "completed onboarding",
    });
  });
}

module.exports = stripe;
