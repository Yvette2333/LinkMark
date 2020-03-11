import { MenuItem } from 'interfaces/menu';
import Loadable from '@/utils/lodable';

const Menu: MenuItem[] = [
  {
    path: "/workBench",
    title: "工作台",
    component: () => import('@/views/workBench'),
    routes: [
      {
        path: "/workBench/myCollection",
        title: "我的收藏",
        component: () => import('@/views/workBench/myCollection')
      }
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