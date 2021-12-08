import React, { Fragment, FC } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import SideBar from '@/components/SideBar';
import Content from '@/styles/components/Content';
import CopyRight from '@/styles/components/CopyRight';
import Menu from '@/configs/menu.config';
import MyCollection from './myCollection';
import { MenuItem } from '@/interfaces/menu';
interface WorkBenchProps {
}

const MenuList: MenuItem[] = Menu[0].routes as MenuItem[];
const WorkBench: FC<WorkBenchProps> = () => {
    return (
        <Fragment>
            <GlobalHeader />
      <SideBar menu={MenuList}/>
            <Content MenuWidth={100}>
                <MyCollection></MyCollection>
                <CopyRight> 版权所有 © https://github.com/Yvette2333 </CopyRight>
            </Content>
        </Fragment>
    );
};

export default React.memo(WorkBench);
