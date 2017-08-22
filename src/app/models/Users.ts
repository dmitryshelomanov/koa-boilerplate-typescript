import DB from '../helpers/DB';

namespace User {
  
  export const getAll = async () => { 
    return await DB.query("select * from users");
  }
}

export default User;