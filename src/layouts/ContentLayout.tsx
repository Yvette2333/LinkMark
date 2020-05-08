import React, { Fragment, FC } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import SideBar from '@/components/SideBar';
import ProtalBox from '@/components/ProtalBox';
import Content from '@/styles/components/Content';
import CopyRight from '@/styles/components/CopyRight';
import Menu from '@/configs/menu.config';
import { Route, Switch } from 'react-router-dom';
import { ContentLayoutProps } from '@/interfaces/views';
import { MenuItem } from '@/interfaces/menu';
import Loadable from '@/utils/lodable';

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

const ContentLayout: FC<ContentLayoutProps> = () => {

  let MenuList:MenuItem[] = Menu[0].routes as MenuItem[];

  let item = RenderRouter(MenuList);
  const layout = (<Content>
    <Switch>
      {RenderRouter(MenuList)}
    </Switch>
    <CopyRight> 版权所有 © https://github.com/Yvette2333 </CopyRight>
  </Content>)

  return (
    <Fragment>
      <GlobalHeader />
      <SideBar menu={MenuList} />
      {layout}
      {/* <ProtalBox></ProtalBox> */}
    </Fragment>
  )
}
export default React.memo(ContentLayout)