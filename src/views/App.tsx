import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { MenuItem } from 'interfaces/menu';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import ContentLayout from '@/layouts/ContentLayout';
import Loadable from '@/utils/lodable';
import Menu from '@/configs/menu.config';
import RootStore from '@/store';
import NoFoundPage from './404';

function RenderRouter(list: MenuItem[]): any {
  return list.map((item: MenuItem) => {
    let { routes, ...currentItem } = item;
    return routes ?
      RenderRouter([currentItem, ...routes] as MenuItem[])
      : <Route
        exact
        path={item.path}
        key={item.path}
        component={Loadable(item.component)}
      />
  })
}

function App(props:any) {
  console.log(props)
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={RootStore}>
        <HashRouter>
          <Switch>
            <Redirect exact path="/" to="login" />
            <Route path="/workBench" key="/workBench" component={(props:RouteComponentProps)=> {
              return <ContentLayout {...props}/>
            }}/>
            {RenderRouter(Menu)}
            <Route component={(props: RouteComponentProps) => <NoFoundPage {...props} />} />
          </Switch>
        </HashRouter>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
