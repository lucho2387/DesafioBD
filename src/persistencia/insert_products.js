const knex = require('../config/mysql');

const productos = [
    { title: 'Mayonesa', price: 120 , imagen: "asdasdad"},
    { title: 'Savora', price: 90 , imagen: "asdadd2sdad"},
    { title: 'Manteca', price: 100 , imagen: "asda123asdsdad"}
]

// Seleccionamos la tabla de autios con knex
knex('productos').insert(productos)
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
