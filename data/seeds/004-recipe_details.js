
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_details').insert([
        {id: 1, recipe_id: 1, ingredient_id:1 },
        {id: 2, recipe_id: 1, ingredient_id:2 },
        {id: 3, recipe_id: 1, ingredient_id:3 }
      ]);
    });
};
