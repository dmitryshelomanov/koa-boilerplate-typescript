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

  /**
   * @return {DB} instanse
   */
  public static instanse()
  { 
    if (this.inst) { 
      return this.inst;
    }
    return this.inst = new DB();
  }
  
  /**
   * 
   * @param sql 
   * @param args 
   */
  public query(sql: string, args?: (string[]|number[]))
  { 
    return new Promise((res: typeof Promise.resolve, rej: typeof Promise.reject) => { 
      this.connection.query(sql, args, (err, rows) => { 
        if (err) throw err;
        res(rows);
      });
    });
  }
}

export default DB.instanse();