

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, products: JSON.stringify([{id: 1, productName: 'bacon', price: 5.00, quantity: 1}, {id:4, productName: 'spicy habanero sauce', price: 4.00, quantity: 1}]), buyerId: 4, orderTotal: 9.00, createdAt: Date.now(), updatedAt: Date.now(), shipped: false},
        {id: 2, products: JSON.stringify([{id: 2, productName: 'lavender soap', price: 3.00, quantity: 1}]), buyerId: 3, orderTotal: 3.00, createdAt: Date.now(), updatedAt: Date.now(),  shipped: false},
        {id: 3, products: JSON.stringify([{id: 3, productName: 'mixed carrots', price: 7.00, quantity: 2}]), buyerId: 2, orderTotal: 14.00, createdAt: Date.now(), updatedAt: Date.now(),  shipped: false},
        // {orderId: 1, productId: 1, buyerId: 4, price: 5.00, quantity: 1, itemDetails: {item:"bacon"}, shipped: false},
        // {orderId: 1, productId: 4, buyerId: 4, price: 4.00, quantity: 1, itemDetails: {item:"spicy habanero sauce"}, shipped: false},
        // {orderId: 2, productId: 2, buyerId: 3, price: 3.00, quantity: 1, itemDetails: {item:"lavender soap"}, shipped: false},
        // {orderId: 3, productId: 3, buyerId: 2, price: 7.00, quantity: 1, itemDetails: {item:"mixed carrots"}, shipped: false}
      ]);
    });
};
