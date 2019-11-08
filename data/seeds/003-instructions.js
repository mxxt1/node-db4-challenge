
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, instruction: 'pour the salt', recipe_id: 1, step: 1},
        {id: 2, instruction: 'sniff the pepper ', recipe_id: 1, step: 2},
        {id: 3, instruction: 'CHUG THE KETCHUP', recipe_id: 1, step: 3}
      ]);
    });
};
