import { take, put, call, fork } from 'redux-saga/effects'
import { GlobalServices } from '@/store/services/global';
// import { MOCKLOGIN, SHOWERROR } from '../actions/global';


// 对发出对请求进行控制？ takeEvery，,错误处理
export function* request() {
  const res = yield take("Request");
  const { callback, ...actions } = res;
  let response = yield call(() => Request(actions))
  typeof callback === "function" && callback(response)
}

export function* Request(action: any) {
  try {
    const response = yield call(()=>GlobalServices["onFetch"](action.payload));
    if (response.code === 200) {
      return response
    } else {
      throw new Error(`error message: ${response.msg}`)
    }
  } catch (err) {
    console.log('try...catch...', err.message)
    yield put({ type: "GLOBAL/SHOWMESSAGE", payload: { errMessage: err.message } })
  }
}

export default [
  fork(request),
]