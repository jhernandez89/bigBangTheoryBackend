exports.up = function (knex, Promise) {
  return knex.schema.createTable('episodes', (table) => {
    table.integer('season');
    table.string('episode_title');
    table.integer('episode_number').primary();
    table.string('episode_length');
    table.string('release_date');
    table.string('interesting_fact', [1000]);
    table.string('image');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('episodes');
};
