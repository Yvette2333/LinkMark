import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    Row, Button, Input, Form, Checkbox, message
} from 'antd';
import useRedux from '@/hooks/useRedux/index';
import { LoginProps } from '@/interfaces/views';
import LOGO_IMG from '@/assets/images/logo.png';
import { LoginWrapper, LOGO } from './styles';
const FormItem = Form.Item;

const Login: FC<LoginProps> = (props: LoginProps) => {
    const { Dispatch } = useRedux(['Global', 'Login']);

    const onFinish = (values: any) => {
        props.history.push('/workBench');

        Dispatch({
            type: 'GLOBAL/SIGNIN',
            payload: JSON.stringify({ ...values }),
            callback: (resData: any) => {
                if (resData.code === 200) {
                    // props.history.push('/workBench')
                }
            }
        });
    };

    const onFinishFailed = (): void => {
        message.warn('提交失败');
    };

    return (
        <LoginWrapper>
            <Form
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Row>
                    <LOGO src={LOGO_IMG} />
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
                        { required: true, min: 6, message: '请输入至少6位数密码!' }
                    ]}
                >
                    <Input.Password />
                </FormItem>
                <FormItem>
                    <FormItem name="remember" valuePropName="checked" className="pull-left">
                        <Checkbox>记住账号密码</Checkbox>
                    </FormItem>
                    <Link to={{ pathname: '/signup' }}>
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
    );
};

export default React.memo(Login);
