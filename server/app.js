/**
 *  @description 连接数据库并且对连接进行了优化 - ./module/db
 *  @description 此项目中使用了热重启nodemon 并修改了pageage.json 使用 npm start 启动项目即可
 *  @description ejs模版相关语法查看https://www.npmjs.com/package/ejs
 */
import Koa from 'koa';
import views from 'koa-views';//ejs模版引擎  视图渲染模块
import bodyparser from 'koa-bodyparser' ;
import server from 'koa-static';//配置静态文件
import session from 'koa-session';//session插件
import routers from './routers';
// import React from 'react';
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom";
// import App from "./client/app";
const app = new Koa()

app.keys = ['required for signed cookies'];
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
app.use(bodyparser());
app.use(session(CONFIG, app));//使用session配置

/**
 * @description 应用级中间件 
 */


app.use(async (ctx,next) => {
  console.log(ctx.request.header.origin); // http://localhost:3000
  ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin);
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With ');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
  //优先匹配koa-router中的路由 后匹配react-router
  //此处区分react-router 路由 或者 koa-router接口路由
  // if (ctx.status===404) {
  //   const context = {}
  //   const html = ReactDOMServer.renderToString(
  //     <StaticRouter location={ctx.url} context={context}>
  //       <App />
  //     </StaticRouter>
  //   );
  //   const _frontHtml = `
  //     <!doctype html>
  //     <div id="app">${html}</div>
  //   `
  //   ctx.body = _frontHtml;
  // }else{
    await next();
  // }
})

 //启动路由
app
.use(routers.routes())
.use(routers.allowedMethods());
app.use(server(__dirname + '/client/public'));//存放静态文件
app.use(views(__dirname + './client'));

// app.use(async (ctx,next)=> {
//   ctx.set('Access-Control-Allow-Origin', 'http://192.168.1.6:8088');
//   ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
//   await next();
// })

app.listen(8088,()=>{
  console.log('run in borswer http://localhost:8088')
});