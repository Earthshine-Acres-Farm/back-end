
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, productName: 'bacon', price: 5.00, amount: '5 lbs', productType: 'pig', description: 'premium bacon'},
        {id: 2, productName: 'lavender soap', price: 7.00, amount: '2 bars', productType: 'soap', description: 'great soap'},
        {id: 3, productName: 'mixed carrots', price: 3.00, amount: '4 lbs', productType: 'produce', description: 'fresh carrots'},
        {id: 4, productName: 'spicy habanero sauce', price: 4.00, amount: '8 oz', productType: 'hotSauce', description: 'hottest sauce'},
        {id: 5, productName: 'porkchops', price: 15.00, amount: '3 lbs', productType: 'pig', description: 'smoked'},
        {id: 6, productName: 'milk', price: 3.00, amount: '24 oz', productType: 'cow', description: 'organic milk'},
        {id: 7, productName: 'honey', price: 7.00, amount: '6 oz', productType: 'produce', description: 'tupelo honey'},
        {id: 8, productName: 'spicy barbeque', price: 3.00, amount: '8 oz', productType: 'hotSauce', description: 'barbeque with a kick'},
        {id: 9, productName: 'shea butter soap', price: 7.00, amount: '2 bars', productType: 'soap', description: 'fresh soap'},
        {id: 10, productName: 'cracked pepper', price: 2.00, amount: '4 oz', productType: 'groundPepper', description: 'fresh ground peppercorn'},
        {id: 11, productName: 'cracked lemonpepper', price: 2.00, amount: '4 oz', productType: 'groundPepper', description: 'lemon peppercorn'},
      ]);
    });
};
