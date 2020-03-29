import { Login } from '../../apis/login'
import Request from '@/utils/request';

console.log(Request)
export const GlobalServices = {
  onFetch: async (payload: any) => {
    // 在该请求中增加拦截器 更改options
    // Request.interceptors.request.use((options:any)=>{
    //   console.log('ahhhh  onfetch interceptors')
    //   // options.method = options.method + "1";
    //   return options
    // })
    return await Request.post(Login.queryBookMark)

  },
  verifyCode:async (payload: any) => (await Request.method.post(Login.verifyCode,{
    body:payload
  })),
  signUp:async (payload: any) => (await Request.post(Login.signUp,{
    body:payload
  })),
  
}