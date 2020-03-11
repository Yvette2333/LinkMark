import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Result } from 'antd';

const NoFoundPage: React.FC<RouteComponentProps> = (props) => (
  <Result
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => props.history.goBack()}>
        返回上一个页面
      </Button>
    }
  />
);

export default NoFoundPage;