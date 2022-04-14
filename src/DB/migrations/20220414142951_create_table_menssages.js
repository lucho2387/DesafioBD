/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('mensajes', function(table) {
        table.increments('id')
        table.string('email')
        table.timestamp('fehca').defaultTo(knex.fn.now())
        table.text('mensaje')
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('mensajes')
};
