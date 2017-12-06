exports.up = function (knex, Promise) {
  return knex.schema.createTable('description', (table) => {
    table.increments();
    table.string('description', [2000]);
    table.integer('episode_id')
      .references('episodes.episode_number')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('description');
};
