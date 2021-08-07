
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('groundPepper').del()
    .then(function () {
      // Inserts seed entries
      return knex('groundPepper').insert([
        {id: 1, groundPepper: 'lemon', description: 'this is lemon pepper'},
        {id: 2, groundPepper: 'chile', description: 'this is chile pepper'},
        {id: 3, groundPepper: 'chile lime', description: 'this is chile-lime pepper'},
        {id: 4, groundPepper: 'black', description: 'this is black pepper'}
      ]);
    });
};
