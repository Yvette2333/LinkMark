import { Login } from '../../apis/login'
import Request from '@/utils/request';

export const GlobalServices = {
  onFetch: (payload: any) => {
    // 在该请求中增加拦截器 更改options
    // Request.interceptors.request.use((options:any)=>{
    //   console.log('ahhhh  onfetch interceptors')
    //   // options.method = options.method + "1";
    //   return options
    // })
    return Request.method.post(Login.queryBookMark)
  },
  
}