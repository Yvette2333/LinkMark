import { take, call, fork } from 'redux-saga/effects'
import { GlobalServices } from '@/store/services/global';
// import { MOCKLOGIN, SHOWERROR } from '../actions/global';

// 对发出对请求进行控制？ takeEvery，,错误处理
export function* request() {
  const res = yield take("Request");
  const { callback, ...actions } = res;
  let response = yield call(()=>GlobalServices["onFetch"](actions.payload));
  typeof callback === "function" && callback(response)
}

export default [
  fork(request),
]