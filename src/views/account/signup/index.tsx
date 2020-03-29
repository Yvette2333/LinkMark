import React, { useState, useRef, FC } from 'react'
import { Form, Input, Row, Col, Checkbox, Button, message } from 'antd';
import { Link } from 'react-router-dom'
import { SignUpProps } from '@/interfaces/views'
import { SignUpWrapper } from './styles'
import useRedux from '../../../hooks/useRedux/index';
const FormItem = Form.Item;
const MAX_VERIFYCOUNT = 2;
const MAX_VERIFYTIME = 60;

const SignUp: FC<SignUpProps> = () => {

  const [form] = Form.useForm();
  const { Dispatch } = useRedux();
  const [disabled, toggleD] = useState<boolean>(false);
  const [verifyCount, setVerifyCount] = useState<number>(0);
  const [validTime, setValidTime] = useState<number>(MAX_VERIFYTIME);
  const Timer = useRef<any>(null);

  /**
   * @description 发送验证码 
   */
  const sendVerifyCode = () => {
    form.validateFields(['email']).then(({ email }) => {
      toggleD(true)
      verifyCodeTimer()
      Dispatch({
        type: "GLOBAL/VERIFYCODE",
        payload: JSON.stringify({
          email
        }),
        callback: (res: any) => {
          console.log('GLOBAL/VERIFYCODE', res)
          if (res.code===500) {
            resetTimer()
          }
        }
      })
    }).catch(({ errorFields }) => {
      errorFields && message.warn(errorFields[0].errors[0])
    })
  }

  const verifyCodeTimer = () => {
    // 记录获取验证码次数
    setVerifyCount((prevState: number) => {
      return ++prevState
    })
    // 验证获取验证码次数
    if (verifyCount < MAX_VERIFYCOUNT) {
      limitTimeOut()
    } else {
      limitVerifyCount()
    }
  }

  /**
   * @description 限制获取验证码次数
   */
  const limitVerifyCount = () => {

    let outTimer: NodeJS.Timeout | null = null;
    if (!outTimer) {
      outTimer = setTimeout(() => {
        setVerifyCount(0)
        outTimer && clearTimeout(outTimer)
      }, MAX_VERIFYTIME * 1000)
    }
    toggleD(false)
    message.warn('操作过于频繁，请稍后再试！')
  }

  /**
   * @description 限制倒计时
   */
  const limitTimeOut = () => {
    Timer.current = setInterval(() => {
      setValidTime((prevState: number) => {
        if (prevState <= 1) {
          clearInterval(Timer.current)
          toggleD(false)
          Timer.current = null;
          return MAX_VERIFYTIME
        }
        return --prevState
      })
    }, 1000)
  }

  const resetTimer = () => {
    Timer.current = null;
    setValidTime(MAX_VERIFYTIME)
    toggleD(false)
  }

  /**
   * @description 注册
   */

  const onFinish = (values: any) => {
    console.log('Success:', values);
    Dispatch({
      type: "GLOBAL/SIGNUP",
      payload: JSON.stringify({
        ...values
      }),
      callback: (res: any) => {
        console.log('GLOBAL/SIGNUP', res)
      }
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <SignUpWrapper formWidth="960px">
      <Form form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <h3>
          <img src={require('@/assets/images/linkmarkLogo.png')} alt="linkmarkLogo.png" />
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
              <Input placeholder='请输入邮箱' />
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
                  min: 6,
                  max: 18,
                  message: '请输入6-18位密码!',
                },
              ]}
            >
              <Input.Password placeholder='请输入6-18位密码' />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <Form.Item extra="">
              <Row gutter={8}>
                <Col span={16}>
                  <Form.Item
                    name="verifyCode"
                    rules={[
                      { required: true, message: '注意查看邮箱的邮件～!' },
                      { min: 4, max: 4, message: '请输入4位数验证码' }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Button onClick={sendVerifyCode} disabled={disabled}>
                    {disabled ? `${validTime}s后重新获取` : '获取验证码'}
                  </Button>
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