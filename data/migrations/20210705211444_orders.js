
exports.up = async function(knex) {
    await knex.schema
    .createTable('orders',(table)=>{
        table.integer('orderId').notNullable()
        table.integer('productId').notNullable().references('id').inTable('products')
        table.integer('buyerId').notNullable().references('id').inTable('users')
        table.float('price').notNullable().references('price').inTable('products')
        table.integer('quantity').notNullable()

    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('orders')
};
