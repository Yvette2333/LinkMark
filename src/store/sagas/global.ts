import { take, call, fork } from 'redux-saga/effects';
import { GlobalServices } from '@/store/services/global';
import { VERIFYCODE, SIGNUP, SIGNIN } from '../actions/global';

// 对发出对请求进行控制？ takeEvery，,错误处理
export function* request(): any {
    const res = yield take('Request');
    const { callback, ...actions } = res;
    const response = yield call(() => GlobalServices.onFetch(actions.payload));

    if (typeof callback === 'function') {
        callback(response);
    }
}

export function* verifyCode(): any {
    while (true) {
    // TODO: 生成器中迭代器.next() 如何优化 GlobalServices.verifyCode ?
    // TODO: 你不知道的JS中 ： 4.4 generator + promise 🌟🌟🌟
        const res = yield take(VERIFYCODE);
        const { callback, ...actions } = res;
        const response = yield call(() => GlobalServices.verifyCode(actions.payload));

        if (typeof callback === 'function') {
            callback(response);
        }
    }
}
export function* signUp(): any {
    while (true) {
        const res = yield take(SIGNUP);
        const { callback, ...actions } = res;
        const response = yield call(() => GlobalServices.signUp(actions.payload));

        if (typeof callback === 'function') {
            callback(response);
        }
    }
}
export function* signIn(): any {
    while (true) {
        const res = yield take(SIGNIN);
        const { callback, ...actions } = res;
        const response = yield call(() => GlobalServices.signIn(actions.payload));

        if (typeof callback === 'function') {
            callback(response);
        }
    }
}

export default [
    fork(request),
    fork(verifyCode),
    fork(signUp),
    fork(signIn)
];
