async function stripe (fastify, options) {
    const Stripe = require('stripe');
    const stripe = Stripe('sk_test_51HZFQ4GatoJl8CCijv4yMtPYRweLryH3RhB8A79LNFy9fVcsG5jKtsovgHSu6YzwRUe2q4hm8zOeKJydzJwqdDsZ00S7fVpVWC');
    

    fastify.get('/stripe', async (request, reply) => {
    return { hello: 'world' }
    })

    fastify.post('/stripe/onboard/1', async (request,reply) => {
        const account = await stripe.accounts.create({
            type: 'express',
        });
        console.log(account)
        reply.send({
            route: 'stripe onboarding',
            accountID: `${account.id}`
        })
    })
}

module.exports = stripe
