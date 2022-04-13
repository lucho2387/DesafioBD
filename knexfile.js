// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/DB/ecommerce.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/DB/migrations`
    },
    useNullAsDefault: true
  }
};
