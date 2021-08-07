
exports.up = async function(knex) {
    await knex.schema
    .createTable('products',(table)=>{
        table.increments('id')
        table.text('productName').unique().notNullable()
        table.float('price')
        table.integer('amount').notNullable()
        table.text('productType').notNullable()
        table.text('description')
    })
  
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('products')
  
};
