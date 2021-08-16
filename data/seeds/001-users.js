
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'Michael',lastName: 'Kruse', email: 'Michael.Kruse@gov', password:'metro', address: 'tally', isAdmin:true},
        {id: 2, firstName: 'Terry',lastName: 'Edwards Jr', email: 'Terry.Edwards@gov', password:'tech', address: 'tally', isAdmin:true},
        {id: 3, firstName: 'Megan',lastName: 'Money', email: 'Megan.Money@gov', password:'Sr.metro', address: 'tally', isAdmin:false},
        {id: 4, firstName: 'Amy',lastName: 'Smith', email: 'Amy.Smith@gov', password:'labMgr', address: 'tally', isAdmin:false}
      ]);
    });
};
