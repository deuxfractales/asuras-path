async function shipping(fastify, options) {
  var shippo = require("shippo")(
    "shippo_test_835524c4803ee58e518db4d297c74df3c1714c69"
  );
  fastify.get("/shipping", async (request, reply) => {
    var addressFrom = {
      name: "Shawn Ippotle",
      street1: "215 Clayton St.",
      city: "San Francisco",
      state: "CA",
      zip: "94117",
      country: "US",
    };

    var addressTo = {
      name: "Mr Hippo",
      street1: "Broadway 1",
      city: "New York",
      state: "NY",
      zip: "10007",
      country: "US",
    };

    var parcel = {
      length: "5",
      width: "5",
      height: "5",
      distance_unit: "in",
      weight: "2",
      mass_unit: "lb",
    };

    shippo.shipment.create(
      {
        address_from: addressFrom,
        address_to: addressTo,
        parcels: [parcel],
        async: false,
      },
      function (err, shipment) {
        if (err) {
          console.log(err);
          reply.send(err);
        } else {
          console.log(shipment);
          reply.send(shipment);
        }
      }
    );
  });
}

module.exports = shipping;
