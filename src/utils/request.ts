import { notification } from 'antd';
import { InitFetch, codeMessage, ResponseInterceptors, RequestInterceptors, METHODS } from '@/configs/requst.config';


/**
@class Request
@constructor
 */

class Request {
  initOptions: RequestInit;
  interceptors: {
    request: {
      use: Function
    },
    response: {
      use: Function
    }
  }
  initRequestInterceptors: Function[] | undefined;
  initResponseInterceptors: Function[] | undefined;
  RequestInterceptors: Function[];
  ResponseInterceptors: Function[];
  method: {
    [functionName: string]: Function;
  } | undefined;

  constructor(
    initOptions: RequestInit = InitFetch,
    initRequestInterceptors: Function[] = [RequestInterceptors],
    initResponseInterceptors: Function[] = [ResponseInterceptors],
  ) {
    this.initOptions = initOptions;
    this.RequestInterceptors = [...initRequestInterceptors]; // 请求拦截器
    this.ResponseInterceptors = [...initResponseInterceptors]; // 请求拦截器
    // 向拦截器中添加函数的方法 Request.interceptors.request.use(fn)  Request.interceptors.response.use(fn)
    this.interceptors = {
      request: {
        use: (fn: Function) => this.RequestInterceptors.push(fn),
      },
      response: {
        use: (fn: Function) => this.ResponseInterceptors.push(fn),
      }
    }
    // 请求语法糖： Request.method.get Request.method.post ……
    METHODS.forEach((method: string) => {
      if ( this.method ) {
        this.method[method] = (url: string, options: RequestInit) => this.sendFetch(url, { ...options, method });
      }
    })
  }

  /**
   * @description 错误处理
  * @param res fetch返回未经过处理的Response信息
  */
  errorHandler = (res: Response) => {
    const { statusText, url, status } = res;
    if (status !== 200) {
      notification.error({
        message: `请求错误 ${status}: ${url}`,
        description: codeMessage[status] || statusText,
      });
      throw res;
    }
    return res
  }

  sendFetch = (url: string, options: RequestInit) => {
    if (typeof url !== 'string') {
      throw new Error('url MUST be a string');
    }
    // 执行request前的拦截器，更改options
    options = this.runInterceptors(this.RequestInterceptors, options)

    return fetch(url, options)
      .then(this.errorHandler)
      .then(res => res.json())
      .then(res => {
        //ResponseInterceptors是拦截响应结果的拦截处理函数集合 执行后的函数
        res = this.runInterceptors(this.ResponseInterceptors, res)
        //将拦截器处理后的响应结果resolve出去
        Promise.resolve(res)
      })
      .catch(error => console.log(error))
  }

  runInterceptors = (fnList: Function[], res: any) => {
    let result = res;
    fnList.forEach(async (interceptors: any) => {
      if (typeof interceptors !== 'function') {
        throw new TypeError('Interceptor must be function!');
      }
      let interceptorsRes = await interceptors(res);
      result = !interceptorsRes ? result : interceptorsRes;
    })
    console.log(result)
    return result
  }

}
let res:any = new Request();

export default res