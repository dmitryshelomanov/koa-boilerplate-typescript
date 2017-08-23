export default interface parentPromise { 
  resolve: typeof Promise.resolve,
  reject: typeof Promise.reject
}