
exports.up = async function(knex) {
    await knex.schema
    .createTable('users',(table)=>{
        table.increments('id')
        table.text('firstName').notNullable()
        table.text('lastName').notNullable()
        table.text('email').notNullable().unique()
        table.text('password').notNullable().unique()
        table.boolean('isAdmin').defaultTo(false)
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('users')
};
