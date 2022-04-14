const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile.mysql)

module.exports = knex;
