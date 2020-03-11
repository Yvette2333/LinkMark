import { ReactComponentElement } from 'react';

export interface MenuItem<T extends MenuItem = MenuItem> {
  // 路由路径
  path: string,
  // 页面title
  title: string,
  // 页面路径
  component: () => Promise<ReactComponentElement>,
  // routes 的数组类型为MenuItem
  routes?: T[]
}