import * as crypto from 'crypto';
import DB from '../../models/DB';

export default class createToken {

  public async createOrGetToken(login: string, password: string): Promise<any> {
    
    let user = await this.checkUser(login, password);
    if (!user) return false;
    let newToken = await this.generateToken();
    let oldToken = await this.checkToken(user.id);
    if (!oldToken) { 
      await this.insertToken(user.id, newToken);
      return {
        user,
        token: newToken
      };
    }

    await this.updatetoken(user.id, newToken);
    return {
      user,
      token: newToken
    };

  }

  public async getUser(token: string) { 
    return await DB.knex("users")
      .where("token", "=", token)
      .first();
  }

  public async checkUser(login: string, password: string) {
    return await DB.knex("users")
      .where("login", "=", login)
      .andWhere("password", "=", password)
      .first();
  }

  public async checkToken(user_id: number) { 
    return await DB.knex("token")
      .where("user_id", "=", user_id)
      .first();
  }

  public async updatetoken(user_id: number, token: string) { 
    return await DB.knex("token")
      .where("user_id", "=", user_id)
      .update({
        token
      });
  }

  public async insertToken(user_id: number, token: string) { 
    return await DB.knex("token")  
      .insert({
        user_id,
        token,
        created_at: Date.now()
      });
  }


  public async generateToken(): Promise<any> { 
    return await crypto.randomBytes(32).toString("hex");
  }

}