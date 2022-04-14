const knex = require('../config/mysql');

(async () => {
    try {
        await knex.schema.createTable('productos', table => {
            table.increments('id')
            table.string('title')
            table.integer('price')
            table.string('imagen')
        })
        console.log("Tabla productos creada")
    } catch (err) {
        console.log(err)
    } finally {
        knex.destroy();
    }
})();
