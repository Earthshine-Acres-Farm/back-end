
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produce').del()
    .then(function () {
      // Inserts seed entries
      return knex('produce').insert([
        {id: 1, produce: 'green beans', description: 'these are green beans'},
        {id: 2, produce: 'carrots', description: 'these are carrots'},
        {id: 3, produce: 'zucchini', description: 'these are zucchini'},
        {id: 4, produce: 'squash', description: 'these are squash'}
      ]);
    });
};
