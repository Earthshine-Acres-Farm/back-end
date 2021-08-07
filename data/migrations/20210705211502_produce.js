
exports.up = async function(knex) {
    await knex.schema
    .createTable('produce',(table)=>{
        table.increments('id')
        table.text('produce').unique().notNullable()
        table.text('description')
    })
  
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('produce')
};
