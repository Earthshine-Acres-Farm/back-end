
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {orderId: 1, productId: 1, buyerId: 4, price: 5.00, quantity: 1},
        {orderId: 1, productId: 4, buyerId: 4, price: 4.00, quantity: 1},
        {orderId: 2, productId: 2, buyerId: 3, price: 3.00, quantity: 1},
        {orderId: 3, productId: 3, buyerId: 2, price: 7.00, quantity: 1}
      ]);
    });
};
