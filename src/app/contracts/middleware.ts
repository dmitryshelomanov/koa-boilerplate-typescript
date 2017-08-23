export default interface parentPromise { 
  resolve: (value?: {} | PromiseLike<any> | undefined) => void,
  reject: (value?: {} | PromiseLike<any> | undefined) => void
}