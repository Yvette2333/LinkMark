import { notification } from 'antd';
import {
    InitFetch, codeMessage, ResponseInterceptors, RequestInterceptors, METHODS
} from '@/configs/requst.config';

class Request {
  initOptions: RequestInit;

  interceptors: {
    request: {
      use: Function;
    };
    response: {
      use: Function;
    };
  }

  initRequestInterceptors: Function[] | undefined;

  initResponseInterceptors: Function[] | undefined;

  RequestInterceptors: Function[];

  ResponseInterceptors: Function[];

  method: void;

  constructor(
      initOptions: RequestInit = InitFetch,
      initRequestInterceptors: Function[] = [RequestInterceptors],
      initResponseInterceptors: Function[] = [ResponseInterceptors]
  ) {
      this.initOptions = initOptions;
      this.RequestInterceptors = [...initRequestInterceptors]; // 请求拦截器
      this.ResponseInterceptors = [...initResponseInterceptors]; // 请求拦截器
      // 向拦截器中添加函数的方法 Request.interceptors.request.use(fn)  Request.interceptors.response.use(fn)
      this.interceptors = {
          request: {
              use: (fn: Function) => this.RequestInterceptors.push(fn)
          },
          response: {
              use: (fn: Function) => this.ResponseInterceptors.push(fn)
          }
      };

      this.method = this.initMethod();
  }

  initMethod = (): any => {
      // 请求语法糖： Request.method.get Request.method.post ……
      const Method: any = {};
      const _this = this;

      for (var i = 0, method; method = METHODS[i++];) {
          (function (method) {
              Method[method] = (url: string, options: RequestInit) => _this.sendFetch(url, { ...options, method });
          })(method);
      }

      return Method;
  }

  post = (url: string, options: RequestInit) => this.sendFetch(url, { ...this.initOptions, ...options, method: 'POST' });

  /**
  * 错误处理
  * @param {object} fetch返回未经过处理的Response信息
  * @returns {object} res
  */
  errorHandler = (res: Response): any => {
      const { statusText, url, status } = res;

      if (status !== 200) {
          notification.error({
              message: `请求错误 ${status}: ${url}`,
              description: codeMessage[status] || statusText
          });
          // will be catch by fetch.catch()
          throw res;
      }

      return res;
  }

  sendFetch = (url: string, options: RequestInit): any => {
      if (typeof url !== 'string') {
          throw new Error('url MUST be a string');
      }
      // 执行request前的拦截器，更改options
      const newOptions = this.runInterceptors(this.RequestInterceptors, options);

      return fetch(url, newOptions)
      // TODO: 体验不太好。强提示
      // .then(this.errorHandler)
          .then(res => res.json())
          .then(res => {
              // ResponseInterceptors是拦截响应结果的拦截处理函数集合 执行后的函数
              res = this.runInterceptors(this.ResponseInterceptors, res);
              // 将拦截器处理后的响应结果resolve出去(决议)
              Promise.resolve(res);

              return res;
          })
          .catch(error => console.log(error));
  }

  // 执行拦截器中的函数
  runInterceptors = (fnList: Function[], res: any) => {
      let result = res;

      fnList.forEach(async (interceptors: any) => {
          if (typeof interceptors !== 'function') {
              throw new TypeError('Interceptor must be function!');
          }
          // 其中函数会按照执行的顺序放入执行栈，并通过result 来记录/更改当前函数的执行上下文
          const interceptorsRes = await interceptors(res);

          result = !interceptorsRes ? result : interceptorsRes;
      });

      return result;
  }
}
const res: any = new Request();

export default res;
