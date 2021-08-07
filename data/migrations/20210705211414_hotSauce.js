
exports.up = async function(knex) {
    await knex.schema
    .createTable('hotSauce',(table)=>{
        table.increments('id')
        table.text('sauce').unique().notNullable()
        table.text('description')
    })
  
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('hotSauce')
  
};
