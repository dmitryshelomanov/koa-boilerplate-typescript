const auth = require('../dist/app/middleware/access/auth');

module.exports = {
  aliases: [
    'errors',
    'logger',
    'bodyParser',
    'session',
    'templates',
    'flash',
    'csrf'
  ],
  middleware: {
    auth: {
      routes: ['/'],
      hundlers: [
        auth.default,
        auth.default
      ]
    }
  },
  policy: [],
  db: {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'test'
  },
  port: 3000,
  root: process.cwd()
}