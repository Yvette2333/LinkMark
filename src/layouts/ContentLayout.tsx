import React, { useState, useEffect, Fragment, FC } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import SideBar from '@/components/SideBar';
import Content from '@/styles/components/Content';
import CopyRight from '@/styles/components/CopyRight';
import Menu from '@/configs/menu.config';
import { Link, Route, Switch } from 'react-router-dom';
import {ContentLayoutProps} from '@/interfaces/views';

const ContentLayout: FC<ContentLayoutProps> = (props) => {

  const { location: { pathname} } = props;
  console.log(pathname)
  const layout = (<Content>
    Right Content
    <Link to={{pathname:"/workBench/preview1"}}>/preview</Link>
    <Switch>
      <Route exact path="/workBench/preview" render={()=><div>....preview</div>}> </Route>
      <Route exact path="/workBench/preview1" render={()=><div>....111</div>}> </Route>
    </Switch>
    <CopyRight> 版权所有 © https://github.com/Yvette2333 </CopyRight>
  </Content>)

  return (
    <Fragment>
      <GlobalHeader />
      <SideBar menu={Menu}/>
      {layout}
    </Fragment>
  )
}
export default React.memo(ContentLayout)