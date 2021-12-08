import { InitGlobalState } from '@/interfaces/store';
import * as GLOBAL from '../actions/global';

const initState: InitGlobalState = {
    isSuccess: null,
    errMessage: null
};

const GlobalStore = (state = initState, actions: any): InitGlobalState => {
    const { payload } = actions;

    switch (actions.type) {
    case GLOBAL.MOCKLOGIN: {
        // 实际上不对state做任何处理
        return { ...state, ...payload };
    }
    case GLOBAL.SHOWMESSAGE: {
        // 处理错误信息
        return { ...state, ...payload };
    }
    default:
        return { ...state };
    }
};

export default GlobalStore;
