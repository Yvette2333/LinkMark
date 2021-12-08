/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useRef, FC } from 'react';
import {
    Form, Input, Row, Col, Checkbox, Button, message
} from 'antd';
import { Link } from 'react-router-dom';
import { SignUpProps } from '@/interfaces/views';
import { SignUpWrapper } from './styles';
import useRedux from '../../../hooks/useRedux/index';
import LOGO from '@/assets/images/linkmarkLogo.png';
const FormItem = Form.Item;

const MAX_VERIFYCOUNT = 2;
const MAX_VERIFYTIME = 60;

const SignUp: FC<SignUpProps> = () => {
    const [form] = Form.useForm();
    const { Dispatch } = useRedux();
    const [disabled, setDiasabled] = useState<boolean>(false);
    const [verifyCount, setVerifyCount] = useState<number>(0);
    const [validTime, setValidTime] = useState<number>(MAX_VERIFYTIME);
    const Timer = useRef<any>(null);

    const resetTimer = (): void => {
        Timer.current = null;
        setValidTime(MAX_VERIFYTIME);
        setDiasabled(false);
    };

    /**
     * 发送验证码
     * @returns {void}
     */
    const sendVerifyCode = (): void => {
        form.validateFields(['email']).then(({ email }) => {
            setDiasabled(true);
            verifyCodeTimer();
            Dispatch({
                type: 'GLOBAL/VERIFYCODE',
                payload: JSON.stringify({
                    email
                }),
                callback: (res: any) => {
                    if (res && res.code === 500) {
                        resetTimer();
                    } else {
                        message.warn('获取验证码失败！');
                    }
                }
            });
        }).catch(({ errorFields }) => {
            if (errorFields) {
                message.warn(errorFields[0].errors[0]);
            }
        });
    };

    /**
     * 限制获取验证码次数
     * @returns {void}
     */
    const limitVerifyCount = (): void => {
        let outTimer: NodeJS.Timeout | null = null;

        if (!outTimer) {
            outTimer = setTimeout(() => {
                setVerifyCount(0);

                if (outTimer) {
                    clearTimeout(outTimer);
                }
            }, MAX_VERIFYTIME * 1000);
        }
        setDiasabled(false);
        message.warn('操作过于频繁，请稍后再试！');
    };

    /**
     * 限制倒计时
     * @returns {void}
     */
    const limitTimeOut = (): void => {
        Timer.current = setInterval(() => {
            setValidTime((prevState: number) => {
                if (prevState <= 1) {
                    clearInterval(Timer.current);
                    setDiasabled(false);
                    Timer.current = null;

                    return MAX_VERIFYTIME;
                }

                return --prevState;
            });
        }, 1000);
    };

    const verifyCodeTimer = (): void => {
    // 记录获取验证码次数
        setVerifyCount((prevState: number) => {
            return ++prevState;
        });
        // 验证获取验证码次数
        if (verifyCount < MAX_VERIFYCOUNT) {
            limitTimeOut();
        } else {
            limitVerifyCount();
        }
    };

    /**
     * 注册
     * @param {any} values The first number.
     * @returns {void}
     */
    const onFinish = (values: any): void => {
        Dispatch({
            type: 'GLOBAL/SIGNUP',
            payload: JSON.stringify({
                ...values
            }),
            callback: (res: any) => {
                console.log('GLOBAL/SIGNUP', res);
            }
        });
    };

    const onFinishFailed = (errorInfo: any): void => {
        console.log('Failed:', errorInfo);
    };

    return (
        <SignUpWrapper formWidth="960px">
            <Form form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <h3><img src={LOGO} alt="linkmarkLogo.png" /></h3>
                <Row>
                    <Col span={12} offset={6}>
                        <FormItem
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: '邮箱格式不正确!'
                                },
                                {
                                    required: true,
                                    message: '请输入邮箱!'
                                }
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
                                    min: 6,
                                    max: 18,
                                    message: '请输入6-18位密码!'
                                }
                            ]}
                        >
                            <Input.Password placeholder="请输入6-18位密码" />
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
                            <Link to={{ pathname: '/login' }}>
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
    );
};

export default React.memo(SignUp);
