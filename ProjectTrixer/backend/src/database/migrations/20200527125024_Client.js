exports.up = function(knex) {
    return knex.schema.createTable('Client', function(table){
        table.string('id').primary();

        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('sexo');
        table.decimal('cash');
        table.string('bio');
        table.string('city');
        table.string('uf', 2);
        table.decimal('cpf', 11).notNullable();
        table.decimal('whatsapp');
        table.decimal('cartao');
        table.decimal('cvc');
        table.decimal('expDate');
        table.string('titular');
        table.string('rank').notNullable();
        table.string('picture');
        table.string('facebook');
        table.string('linkedin');

        table.string('cargo').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.createTable('Client');
};
