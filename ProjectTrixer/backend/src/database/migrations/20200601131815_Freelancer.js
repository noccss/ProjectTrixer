exports.up = function(knex) {
    return knex.schema.createTable('Freelancer', function(table) {
        table.string('id').primary();

        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('bio');
        table.string('sexo');
        table.string('city');
        table.string('uf', 2);
        table.string('skills');
        table.decimal('cash');
        table.decimal('cpf', 11).notNullable();
        table.decimal('whatsapp');
        table.decimal('proposta');
        table.decimal('cartao');
        table.decimal('cvc');
        table.decimal('expDate');
        table.string('titular');
        table.string('rank').notNullable();
        table.string('picture');
        table.string('facebook');
        table.string('linkedin');

        table.string('cargo').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Freelancer');
};
