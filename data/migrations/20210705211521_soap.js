
exports.up = async function(knex) {
    await knex.schema
    .createTable('soap',(table)=>{
        table.increments('id')
        table.text('soap').unique().notNullable()
        table.text('description')
    })
  
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('soap')
  
};
