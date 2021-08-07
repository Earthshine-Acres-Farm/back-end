
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, productName: 'bacon', price: 5.00, amount: '5 lbs', productType: 'pig', description: 'premium bacon'},
        {id: 2, productName: 'lavender soap', price: 7.00, amount: '2 bars', productType: 'lavender', description: 'great soap'},
        {id: 3, productName: 'mixed carrots', price: 3.00, amount: '4 lbs', productType: 'carrot', description: 'fresh carrots'},
        {id: 4, productName: 'spicy habanero sauce', price: 4.00, amount: '8 oz', productType: 'habanero', description: 'hottest sauce'}
      ]);
    });
};
