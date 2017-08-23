import { IUser } from '../../models/Users';
import * as Config from 'config';

export default {

  async can(call: string, args?: any[]): Promise<boolean>{
    return await policy(call, args);
  },

  async cannot(call: string, args?: any[]): Promise<boolean> {
    return await !policy(call, args);
  }

};

const policy = async (call: string, args?: any[]): Promise<boolean> => {
  try {
    return await require(`../../policy/${call}`).default(args);
  } catch (err) { 
    throw err;
  }
};