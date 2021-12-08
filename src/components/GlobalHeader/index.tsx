import React, { Fragment, FC } from 'react';
import { Avatar } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import LOGO from '@/assets/images/logo.png';
import { Header } from './styles';
interface GlobalHeaderProps {
  userAvatar?: string;
}

const GlobalHeader: FC<GlobalHeaderProps> = () => {
    return (
        <Fragment>
            <Header>
                <img src={LOGO} alt="Link Mark"/>

                <div style={{ float: 'right' }}>
                    <PlusCircleOutlined style={{ fontSize: 24, marginRight: 12 }}/>

                    <Avatar style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf'
                    }}>Yvette</Avatar>
                </div>
            </Header>
        </Fragment>
    );
};

export default React.memo(GlobalHeader);
