export default (args: any[]): Promise<boolean> => { 
  return new Promise((res: typeof Promise.resolve, rej: typeof Promise.reject) => { 
    res(true);
  });
}