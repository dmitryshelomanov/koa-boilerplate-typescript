import DB from '../helpers/DB';

export const Token = {

  async checkToken(user_id: number): Promise<any> { 
    return await DB.query("select * from token where user_id = ?", [user_id]);
  },
  async insertToken(user_id: number, token: string): Promise<any> { 
    console.log(Date.now())
    return await DB.query("insert into token(user_id, token, created_at) values (?, ?, ?)", [user_id, token, Date.now()]);
  },
  async updateToken(user_id: number, token: string): Promise<any> { 
    return await DB.query("update token set token = ? where user_id = ?", [token, user_id]);
  }
}