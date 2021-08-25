

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, products: JSON.stringify([{id: 1, productName: 'bacon', price: 5.00, quantity: 1}, {id:4, productName: 'spicy habanero sauce', price: 4.00, quantity: 1}]), buyerId: 4, orderTotal: 9.00, createdAt: Date.now(), updatedAt: Date.now(), shipped: true},
        {id: 2, products: JSON.stringify([{id: 2, productName: 'lavender soap', price: 3.00, quantity: 1}]), buyerId: 3, orderTotal: 3.00, createdAt: Date.now(), updatedAt: Date.now(), shipped: true},
        {id: 3, products: JSON.stringify([{id: 3, productName: 'mixed carrots', price: 7.00, quantity: 2}]), buyerId: 2, orderTotal: 14.00, createdAt: Date.now(), updatedAt: Date.now(), shipped: true},
        {id: 4, products: JSON.stringify([{id: 5, productName: 'porkchops', price: 15.00, quantity: 1}, {id: 6, productName: 'milk', price: 3.00, quantity: 2}, {id: 8, productName: 'spicy barbeque', price: 3.00, quantity: 2}]), buyerId: 2, orderTotal: 12.00, createdAt: Date.now(), updatedAt: Date.now(), shipped: false},
        {id: 5, products: JSON.stringify([{id: 7, productName: 'honey', price: 7.00, quantity: 2}, {id: 9, productName: 'shea butter soap', price: 7.00, quantity: 2}, {id: 10, productName: 'cracked pepper', price: 2.00, quantity: 2}]), buyerId: 3, orderTotal: 32.00, createdAt: Date.now(), updatedAt: Date.now(), shipped: false},
        {id: 6, products: JSON.stringify([{id: 11, productName: 'cracked lemonpepper', price: 2.00, quantity: 2}]), buyerId: 4, orderTotal: 4.00, createdAt: Date.now(), updatedAt: Date.now(), shipped: false}
      ]);
    });
};
