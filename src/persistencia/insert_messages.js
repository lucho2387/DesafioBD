const knex = require('../config/knex');

const mensajes = [
    { email: 'luis@hotmail.com', mensaje: "Hola"},
    { title: 'seba@gmail.com', mensaje: "Hola Luis"},
    { email: 'luis@hotmail.com', mensaje: "Como vas con el desafio"},
]

// Seleccionamos la tabla de autios con knex
knex('mensajes').insert(mensajes)
    .then(() => {
        console.log('Datos Insertados')
    })
    .catch(err => {
        console.log(err)
        throw err
    })
    .finally(() => {
        knex.destroy();
    })
