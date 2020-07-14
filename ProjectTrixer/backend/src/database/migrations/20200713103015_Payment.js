exports.up = function(knex) {
    return knex.schema.createTable('Payment', function(table){
        table.increments();

        table.string('idFreelancer');
        table.string('idCliente');
        table.decimal('valor');

        table.foreign('idFreelancer').references('id').inTable('Freelancer');

        table.foreign('idCliente').references('id').inTable('Cliente');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Payment');
};
