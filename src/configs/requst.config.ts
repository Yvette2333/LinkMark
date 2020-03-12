import { message } from 'antd';
import { ICodeMessage } from '@/interfaces/utils';

export const InitFetch = {
  method: "POST",
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
}

export const codeMessage: ICodeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 内置拦截器
export const ResponseInterceptors = (res: any) => {
  console.log('ResponseInterceptors', res)
  if (res.code === 200) {
    return res
  } else {
    message.warn(res.msg);
    Promise.reject(res); // 不阻塞，轻提示
  }
}

export const RequestInterceptors = (options: RequestInit) => {
  console.log('RequestInterceptors', options)
  return options
}

export const METHODS: string[] = ['get', 'post', 'delete', 'put', 'patch', 'head', 'options', 'rpc'];