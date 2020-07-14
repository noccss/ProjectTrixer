exports.up = function(knex) {
    return knex.schema.createTable('Chat', function(table) {
        table.string('id').notNullable();

        table.string('id_de').notNullable();
        table.string('id_para').notNullable();

        table.foreign('id_para').references('id').inTable('Client');

        table.foreign('id_para').references('id').inTable('Freelancer');
    })
};

exports.down = function(knex) {
    return knex.schema.createTable('Chat');
};
