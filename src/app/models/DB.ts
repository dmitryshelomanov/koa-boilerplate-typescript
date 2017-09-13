import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

const knex = Knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql',
    database: 'anime',
    charset: 'utf8',
    debug: false
  }
});

export default Bookshelf(knex);