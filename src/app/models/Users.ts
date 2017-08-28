import DB from '../helpers/DB';

export const User = {
  
  async getAll ()  { 
    return await DB.query("select * from users");
  },
  
  async findOne (id: number): Promise<any>  { 
    return await DB.query("select * from users where id = ? limit 1", [id]);
  },

  async chekUser (login: string, password: string): Promise<any> { 
    return await DB.query("select * from users where login = ? and password = ? limit 1", [login, password]);
  },
  
  async getUser(token: string) { 
    return await DB.query("select users.id, users.name from token join users on users.id = token.user_id where token.token = ?", [token]);
  }
}

export interface IUser { 
  id: number,
  login: string,
  password: string
}