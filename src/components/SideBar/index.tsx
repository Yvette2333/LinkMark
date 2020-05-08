/* TODO: Theme主题色配置 + 展开 */
import React, { useRef, useState, FC } from 'react'
import { Menu, Tabs, Row, Col } from 'antd';
import { MenuItem } from '../../interfaces/menu';
import { Link } from 'react-router-dom';
import {
  PieChartOutlined,
  UnorderedListOutlined,
  PlusCircleOutlined,
  TagOutlined,
} from '@ant-design/icons';
interface SideBarProps {
  menu: MenuItem[]
}
const { TabPane } = Tabs;

const SideBar: FC<SideBarProps> = (props) => {

  const [collapsed, toggleCollapsed] = useState<boolean>(false);
  const Menulist = useRef<MenuItem[]>(props.menu);
  Menulist.current = props.menu;

  return (
    <div className="pull-left" style={{ width: collapsed ? 85 : 225 }}>
      {/* <Row>
        <Button 
          style={{width:"100%"}}
          type="default" 
          onClick={() => toggleCollapsed(!collapsed)}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      </Row> */}

      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {
          Menulist.current.map((item: MenuItem) => <Menu.Item key={item.path}>
            <PieChartOutlined />
            <span><Link to={item.path} >{item.title}</Link></span>
          </Menu.Item>)
        }
      </Menu>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="收藏集" key="1">
          <Row>
            <Col span={24}>
              <UnorderedListOutlined />
                &nbsp; 收藏集1
            </Col>
            <Col span={24}>
              <PlusCircleOutlined />
                &nbsp; 添加收藏集
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="标签" key="2">
          <Row>
            <Col span={24}>
              <TagOutlined />

                &nbsp; 标签
            </Col>
            <Col span={24}>
              <PlusCircleOutlined  />
                &nbsp; 添加收藏集
            </Col>
          </Row>
        </TabPane>    
      </Tabs>
    </div>
  )
}
export default React.memo(SideBar)