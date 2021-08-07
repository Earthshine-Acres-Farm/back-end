
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('soap').del()
    .then(function () {
      // Inserts seed entries
      return knex('soap').insert([
        {id: 1, soap: 'lavender', description: 'this is lavender'},
        {id: 2, soap: 'shea', description: 'this is shea'},
        {id: 3, soap: 'mint', description: 'this is mint'},
        {id: 4, soap: 'sandlewood', description: 'this is sandlewood'}
      ]);
    });
};
