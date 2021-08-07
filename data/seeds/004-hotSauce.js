
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hotSauce').del()
    .then(function () {
      // Inserts seed entries
      return knex('hotSauce').insert([
        {id: 1, sauce: 'mild', description: 'this is mild sauce'},
        {id: 2, sauce: 'habanero', description: 'this is habanero sauce'},
        {id: 3, sauce: 'chile', description: 'this is chile sauce'},
        {id: 4, sauce: 'buffulo', description: 'this is buffulo sauce'}
      ]);
    });
};
