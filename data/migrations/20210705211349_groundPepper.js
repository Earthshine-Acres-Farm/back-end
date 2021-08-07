
exports.up = async function(knex) {
    await knex.schema
    .createTable('groundPepper',(table)=>{
        table.increments('id')
        table.text('groundPepper').unique().notNullable()
        table.text('description')
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('groundPepper')
};
