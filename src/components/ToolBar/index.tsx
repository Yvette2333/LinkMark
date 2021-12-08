import React, { FC } from 'react';
import { Row, Col, Button } from 'antd';
import { BarsOutlined } from '@ant-design/icons';

const ToolBar: FC = () => (
    <Row>
        <Col span={12}>
            <Button> 全部</Button>
            <Button> 网页</Button>
            <Button> 图片</Button>
            <Button> 文本</Button>
        </Col>
        <Col span={12}>
            <div style={{ float: 'right' }}>
                <BarsOutlined
                    style={{ fontSize: '20px', marginLeft: 8, cursor: 'pointer' }} />
                <span> 选择模式 </span>
            </div>
        </Col>
    </Row>
);

export default React.memo(ToolBar);
