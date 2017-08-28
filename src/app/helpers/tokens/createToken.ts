import * as crypto from 'crypto';

export default class createToken {
  
  private checkUserMethod: any;
  public checkTokenMethod: any;
  private insertTokenMethod: any;
  private updateTokenMethod: any;

  private tokenLimit: number = 60;

  public constructor(
    chekUser: (login: string, password: string) => any,
    chekToken: (user_id: number) => any,
    insertToken: (user_id: number, token: string) => any,
    updateToken: (user_id: number, token: string) => any,
  ) { 
    this.checkUserMethod = chekUser;
    this.checkTokenMethod = chekToken;
    this.insertTokenMethod = insertToken;
    this.updateTokenMethod = updateToken;
  }

  public async createOrGetToken(login: string, password: string): Promise<any> { 

    let user = await this.checkUserMethod(login, password);

    if (user.length === 0) return false;

    let token = await this.generateToken();

    let oldToken = await this.checkTokenMethod(user[0].id);

    if (oldToken.length === 0) {
      let insert = await this.insertTokenMethod(user[0].id, token);
      return {
        user: user[0],
        token
      };
    }

    if (Number(oldToken[0].created_at) + this.tokenLimit > Date.now()) {
      return {
        user: user[0],
        token: oldToken[0].token
      };
    }

    let newToken = await this.updateTokenMethod(user[0].id, token);

    return {
      user: user[0],
      token
    };

  }

  public async generateToken(): Promise<any> { 
    return await crypto.randomBytes(32).toString("hex");
  }

}