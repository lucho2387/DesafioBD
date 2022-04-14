const knex = require('../../src/config/mysql');

class Producto {

    constructor() { }

    async guardar(producto) {
        try {
            let resultado = await knex('productos').insert(producto);
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    async buscar(condicion) {
        try {
            let producto = await knex('productos').where(condicion);
            return producto;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Producto();
