export default interface ITemplate {
  csrf: () => any,
  old: (key: string) => string,
  user: () => any,
  isAuth: () => boolean,
  isUnauth: () => boolean
}