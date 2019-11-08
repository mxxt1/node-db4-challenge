
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'salt', quantity: 1 },
        {id: 2, name: 'pepper', quantity: 4 },
        {id: 3, name: 'ketchup', quantity: 2 }
      ]);
    });
};
