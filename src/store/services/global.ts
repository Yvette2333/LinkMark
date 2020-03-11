import { Login } from '../../apis/login'

export const GlobalServices = {
  onFetch: (payload: any) => {
    return fetch(Login.queryBookMark, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ ...payload })
    }).then((data: any) => data.json())
      .catch((err) => { throw new Error(err.message) })
  },
  
}