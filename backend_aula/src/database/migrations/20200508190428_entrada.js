exports.up = function(knex) {
    return knex.schema.createTable('entrada', function(table) {
        table.string('id').primary();
        table.string('nota_entrada').notNullable();
        table.string('data_entrada').notNullable();
        table.string('produto').notNullable();
        table.string('quantidade').notNullable();
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('entrada');
};