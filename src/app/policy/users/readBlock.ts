export default (args: any[]): Promise<any> => { 
  return new Promise((res: typeof Promise.resolve, rej: typeof Promise.reject) => { 
    res(true);
  });
}