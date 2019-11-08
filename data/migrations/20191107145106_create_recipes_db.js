
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('id');

      tbl.string('name', 255).notNullable();
  })

  .createTable('ingredients', tbl => {
      tbl.increments('id');

      tbl.string('name', 255).notNullable();

      tbl.float('quantity').notNullable();

    })

    .createTable('instructions', tbl => {
        tbl.increments('id');

        tbl.string('instruction', 255).notNullable();

        tbl.integer('step').unsigned().notNullable();

        tbl.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

    .createTable('recipe_details', tbl => {

        tbl.increments('id');

        tbl.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        tbl.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_details')
};
