exports.up = function(knex) {
    return knex.schema.createTable('Messages', function(table) {
        table.increments();

        table.string('id_de').notNullable();
        table.string('id_para').notNullable();
        table.string('mensagem').notNullable();
        table.string('id_chat').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('Messages');
};
