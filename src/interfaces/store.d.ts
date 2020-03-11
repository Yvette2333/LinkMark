export interface InitGlobalState {
  /*当前请求返回展示状态 */
  isSuccess: boolean | null,
  errMessage: string | null,
  /* TODO: 存储用户主题习惯 */
  // ThemeProvider: {
  //   collapsed:
  // }
}
export interface InitLoginState {
  name: string
}

export interface AllReducerState {
  Global: InitGlobalState,
  Login: InitLoginState
}