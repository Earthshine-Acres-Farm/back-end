
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {id: 1, animal: 'pig', description: 'these are pigs'},
        {id: 2, animal: 'cow', description: 'these are cows'},
        {id: 3, animal: 'chicken', description: 'these are chickens'},
        {id: 4, animal: 'turkey', description: 'these are turkeys'}
      ]);
    });
};
