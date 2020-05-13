
exports.up = function(knex) {
    return knex.schema.createTable('saida', function(table) {
        table.string('id').primary();
        table.string('nota_saida').notNullable();
        table.string('data_saida').notNullable();
        table.string('produto').notNullable();
        table.string('quantidade').notNullable();
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('saida');
};