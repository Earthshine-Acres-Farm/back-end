
exports.up = async function(knex) {
    await knex.schema
    .createTable('animals',(table) => {
        table.increments('id')
        table.text('animal').unique().notNullable()
        table.text('description')
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('animals')
};
