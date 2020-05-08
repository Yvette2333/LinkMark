import { MenuItem } from 'interfaces/menu';

const Menu: MenuItem[] = [
  {
    path: "/workBench",
    title: "工作台",
    component: () => import('@/views/workBench'),
    routes: [
      {
        path: "/workBench/recent",
        title: "最近7天",
        component: () => import('@/views/recent')
      },
      {
        path: "/workBench/daily",
        title: "日历",
        component: () => import('@/views/daily')
      },
      {
        path: "/workBench/myCollection",
        title: "我的收藏",
        component: () => import('@/views/workBench/myCollection')
      },
      {
        path: "/workBench/recycleBin",
        title: "回收站",
        component: () => import('@/views/recycleBin')
      },
    ]
  }, 
  {
    path: "/login",
    title: "登陆",
    component: () => import('@/views/login')
  }, {
    path: "/setting",
    title: "设置",
    component: () => import('@/views/account/setting')
  }, {
    path: "/signup",
    title: "注册",
    component: () => import('@/views/account/signup')
  }, {
    path: "/recycleBin",
    title: "回收站",
    component: () => import('@/views/recycleBin')
  }
]

export default Menu