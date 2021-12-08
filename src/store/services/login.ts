interface LoginResponce {
  isLogin: boolean;
}

export function login(): LoginResponce {
    return {
        isLogin: true
    };
}
