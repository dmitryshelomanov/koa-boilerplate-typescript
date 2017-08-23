const auth = require('../dist/app/middleware/access/auth');

module.exports = {
  aliases: [
    'errors',
    'logger',
    'bodyParser',
    'session',
    'templates',
    'passport-initialize',
    'passport-session',
    'flash',
    'csrf'
  ],
  middleware: {

  },
  policy: [
 
  ],
  db: {
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'test'
  },
  port: 3000,
  root: process.cwd()
}