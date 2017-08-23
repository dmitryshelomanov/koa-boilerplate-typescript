import IPOlicy from '../../contracts/policy/IPolicy';

const readBlock: IPOlicy = (ctx, args) => { 
  return new Promise((res, rej) => { 
    if (ctx.user) { 
      return res(true);
    }
    return res(false);
  });
}

export default readBlock;