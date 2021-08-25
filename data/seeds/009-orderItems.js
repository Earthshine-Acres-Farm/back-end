
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orderItems').del()
    .then(function () {
      // Inserts seed entries
      return knex('orderItems').insert([
        {id: 1, productId: 1, orderId: 1, quantity: 1},
        {id: 2, productId: 4, orderId: 1, quantity: 1},
        {id: 3, productId: 2, orderId: 2, quantity: 1},
        {id: 4, productId: 3, orderId: 3, quantity: 1}
      ]);
    });
};
