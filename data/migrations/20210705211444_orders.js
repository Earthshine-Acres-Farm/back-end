
exports.up = async function(knex) {
    await knex.schema
    .createTable('orders',(table)=>{
        table.increments('id')
        table.json('products').notNullable()
        table.integer('buyerId').notNullable().references('id').inTable('users')
        table.float('orderTotal').defaultTo(0)
        table.timestamp('createdAt').defaultTo(Date.now())
        table.datetime('updatedAt').defaultTo(Date.now())
        table.boolean('shipped').defaultTo(false)
        

    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('orders')
};
