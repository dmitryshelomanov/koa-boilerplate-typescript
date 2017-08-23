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
  }

}

export interface IUser { 
  id: number,
  login: string,
  password: string
}