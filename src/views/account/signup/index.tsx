import React, { FC } from 'react'
import { Form, Input, Row, Col, Checkbox, Button, message } from 'antd';
import { Link } from 'react-router-dom'
import { SignUpProps } from '@/interfaces/views'
import { SignUpWrapper } from './styles'
const FormItem = Form.Item;

const SignUp: FC<SignUpProps> = (props) => {

  const [form] = Form.useForm();
  /**
   * fetch captcha 
   * @param 
   */
  const sendCaptcha = () => {
    let isValid = form.isFieldValidating('email');
    if (!isValid) return message.warn('请输入正确邮箱地址！')
    let email = form.getFieldValue('email');
    console.log(email)
    // 发出koa对应发送邮件的请求
  }

  return (
    <SignUpWrapper formWidth="960px">
        <Form form={form}>
          <h3>
            <img src={require('@/assets/images/linkmarkLogo.png')} alt="linkmarkLogo.png"/>
          </h3>
          <Row>
            <Col span={12} offset={6}>
              <FormItem
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: '邮箱格式不正确!',
                  },
                  {
                    required: true,
                    message: '请输入邮箱!',
                  },
                ]}
              >
                <Input placeholder="请输入邮箱" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <FormItem
                name="password"
                rules={[
                  {
                    required: true,
                    min:6,
                    max:18,
                    message: '请输入6-18位密码!',
                  },
                ]}
              >
                <Input.Password  placeholder="请输入6-18位密码" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <Form.Item extra="">
                <Row gutter={8}>
                  <Col span={18}>
                    <Form.Item
                      name="captcha"
                      rules={[{ required: true, message: '注意查看邮箱的邮件～!' }]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Button onClick={sendCaptcha}>发送验证码</Button>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
                <FormItem>
                  <FormItem name="remember" valuePropName="checked" className="pull-left">
                    <Checkbox>记住账号密码</Checkbox>
                  </FormItem>
                  <Link to={{ pathname: "/login" }}>
                    已有账号，去登录
                  </Link>
                </FormItem>
              </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <FormItem>  
                <Button type="primary" htmlType="submit">
                  注 册
                </Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </SignUpWrapper>
  )
}
export default React.memo(SignUp)