import React, { useState, useEffect, Fragment, FC } from 'react'
import { Row, Col, Button } from 'antd';
import { BarsOutlined, AppstoreOutlined, CalendarOutlined } from '@ant-design/icons';

interface ToolBarProps {
  // props: any
}

const ToolBar: FC<ToolBarProps> = (props) => {

  const [state, setState] = useState<any>();

  useEffect(() => {
    setState('Hello Function Component ')
  }, [])

  return (
    <Fragment>

      <Row>
        <Col span={12}>
          <Button> 全部</Button>
          <Button> 网页</Button>
          <Button> 图片</Button>
          <Button> 文本</Button>
        </Col>
        <Col span={12}>
          <div style={{ float: 'right' }}>
            <Fragment>
              <BarsOutlined
                style={{ fontSize: '20px', marginLeft: 8, cursor: "pointer" }} />
              <span>
                选择模式
                </span>
            </Fragment>
          </div>
        </Col>  
      </Row>


    </Fragment>
  )
}

export default React.memo(ToolBar)