interface MenuItem {
  // 路由路径
  path:string,
  // 页面title
  title:string,
  // 页面路径
  pagePath:string,
}
const basePath = 'pages'
export const Menu:MenuItem[] = [
  {
    path:"/",
    title:"工作台",
    pagePath:`${basePath}/workBench`
  },{
    path:"/login",
    title:"登陆",
    pagePath:`${basePath}/login`
  },{
    path:"/setting",
    title:"设置",
    pagePath:`${basePath}/account/setting`
  },{
    path:"/signup",
    title:"注册",
    pagePath:`${basePath}/account/signup`
  },{
    path:"/recycleBin",
    title:"回收站",
    pagePath:`${basePath}/recycleBin`
  },
]