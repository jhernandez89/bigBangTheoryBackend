exports.up = function (knex, Promise) {
  return knex.schema.createTable('games', (table) => {
    table.string('imageOne');
    table.string('imageTwo');
    table.string('title');
    table.string('description');
    table.string('videoURL');
    table.string('amazonLink');
    table.string('gameLink');
    table.integer('season');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('games');
};
