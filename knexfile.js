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
  },
  mysql: {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ecommerce1'
    },
    pool: { min: 0, max: 7 }
  }

};
