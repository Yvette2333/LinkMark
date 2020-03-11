/* TODO: Theme主题色配置 + 展开 */
import React, { useRef, useState, useEffect, Fragment, FC } from 'react'
import { Menu, Button, Row } from 'antd';
import { MenuItem } from '../../interfaces/menu';
import { Link } from 'react-router-dom';
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined
} from '@ant-design/icons';
interface SideBarProps {
  menu: MenuItem[]
}

const SideBar: FC<SideBarProps> = (props) => {

  const [collapsed, toggleCollapsed] = useState<boolean>(false);
  const Menulist = useRef<MenuItem[]>(props.menu);
  Menulist.current = props.menu;

  return (
    <div className="pull-left" style={{ width: collapsed? 85: 225 }}>
      {/* <Row>
        <Button 
          style={{width:"100%"}}
          type="default" 
          onClick={() => toggleCollapsed(!collapsed)}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      </Row> */}

      <Menu
        style={{height:'100vh'}}
        defaultSelectedKeys={['1']}
        mode="inline"
        // theme="dark"
        inlineCollapsed={collapsed}
      >
        {
          Menulist.current.map((item:MenuItem) => <Menu.Item key={item.path}>
          <PieChartOutlined />
          <span><Link to={item.path} >{item.title}</Link></span>
          </Menu.Item>)
        }
      </Menu>
    </div>
  )
}
export default React.memo(SideBar)