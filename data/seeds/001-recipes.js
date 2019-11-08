
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Literally Salt and Pepper and Ketchup'},
        {id: 2, name: 'Literally Salt and Pepper and Ketchup v2'},
        {id: 3, name: 'Literally Salt and Pepper and Ketchup v3'}
      ]);
    });
};
