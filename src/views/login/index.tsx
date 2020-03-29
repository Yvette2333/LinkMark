import React, { FC } from 'react'
import useRedux from '@/hooks/useRedux/index';
import { Link } from 'react-router-dom';
import { LoginProps } from '@/interfaces/views';
import { Row, Button, Input, Form, Checkbox } from 'antd';

import { LoginWrapper, LOGO } from './styles';
const FormItem = Form.Item;


const Login: FC<LoginProps> = (props) => {

  const { StoreState } = useRedux(["Global", "Login"])
  const { Global } = StoreState;

  /**TODO: click Debounce */
  const onFinish = (values: any) => {
    // Dispatch({
    //   type: "Request",
    //   payload:{...values},
    //   callback:(resData:any) => {
    //     console.log(resData)
    //   }
    // })
    props.history.push('/workBench')
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('???', errorInfo)
  }

  return (
    <LoginWrapper>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Row>
          <LOGO src={require('@/assets/images/logo.png')} />
        </Row>
        <FormItem
          name="username"
          rules={[{ required: true, message: '请输入邮箱/手机号' }]}
        >
          <Input />
        </FormItem>
        <FormItem
          name="password"
          rules={[
            { required: true, min: 6, message: '请输入至少6位数密码!' },
          ]}
        >
          <Input.Password />
        </FormItem>
        <FormItem>
          <FormItem name="remember" valuePropName="checked" className="pull-left">
            <Checkbox>记住账号密码</Checkbox>
          </FormItem>
          <Link to={{ pathname: "/signup" }}>
            注册账号
              </Link>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            登 录
            </Button>
        </FormItem>
      </Form>
    </LoginWrapper>
  )
}
export default React.memo(Login)