import React, { Fragment, FC } from 'react';
import { Avatar } from 'antd';
import {
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Header } from './styles';

interface GlobalHeaderProps {
}

const GlobalHeader: FC<GlobalHeaderProps> = (props) => {

  return (
    <Fragment>
      <Header>
        <img src={require("@/assets/images/logo.png")} alt="Link Mark"/>


        <div style={{float:'right'}}>

          <PlusCircleOutlined 
          style={{fontSize:24,marginRight:12}}/>

          <Avatar style={{ 
            color: '#f56a00', 
            backgroundColor: '#fde3cf',
          }}>U</Avatar>
        </div>
        
      
      </Header>
    </Fragment>
  )
}
export default React.memo(GlobalHeader)