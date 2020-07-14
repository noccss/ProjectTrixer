exports.up = function(knex) {
    return knex.schema.createTable('Products', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('skills');
        table.decimal('proposta');

        table.string('client_id').notNullable();

        table.foreign('client_id').references('id').inTable('Client');
    })
};

exports.down = function(knex) {
    return knex.schema.createTable('Products');
};
