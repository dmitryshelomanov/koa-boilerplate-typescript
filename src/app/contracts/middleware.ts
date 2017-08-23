export default interface parentPromise { 
  resolve: (value?: {} | PromiseLike<{}> | undefined) => void,
  reject: (value?: {} | PromiseLike<{}> | undefined) => void
}