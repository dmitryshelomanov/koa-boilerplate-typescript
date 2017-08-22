import * as mysql from 'mysql';
import * as Config from 'config';
import IDB from '../../contracts/Db';

const db: IDB = Config.get('db');

class DB
{ 
  private connection: mysql.IConnection;
  private static inst: (DB|null) = null;

  public constructor()
  { 
    this.connection = mysql.createConnection({
      host: db.host,
      user: db.user,
      password: db.password,
      database: db.database
    });
  }

  public static instanse()
  { 
    if (this.inst) { 
      return this.inst;
    }
    return this.inst = new DB();
  }

  public query(sql: string, args?: (string[]|number[]))
  { 
    return new Promise((res, rej) => { 
      this.connection.query(sql, args, (err, rows) => { 
        if (err) throw err;
        res(rows);
      });
    });
  }
}

export default DB.instanse();