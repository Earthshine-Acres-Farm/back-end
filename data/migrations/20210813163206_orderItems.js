
exports.up = async function(knex) {
    await knex.schema
    .createTable('orderItems',(table)=>{
        table.increments('id')
        table.integer('productId').notNullable().references('id').inTable('products')
        table.integer('orderId').notNullable().references('id').inTable('orders')
        // table.float('price').notNullable().references('price').inTable('products')
        table.integer('quantity').notNullable()        
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('orderItems')
};
