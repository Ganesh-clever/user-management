import React from 'react'
import { Form, Input, Checkbox, Button, notification } from 'antd'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../../Redux/Actions/UserAction';

export default function Login() {
    const [api, contextHolder] = notification.useNotification();
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const onFinish = (val: any) => {
        dispatch(LoginUser(val)).then((data: any) => {
            console.log(data);
            
            if (data.payload.status === 200) {
                api.success({
                    message: data.payload.data.Message,
                    placement: 'topRight',
                    duration: 1000
                });
                setTimeout(() => {
                    navigate('/');
                }, 1000)
            }

        }).catch(() => {
            api.error({
                message: 'Invaild credentials enterd',
                placement: 'topRight'
            });
        });
    }
    return (
        <>
            {contextHolder}
            <div className="login-container">
                <div className="title">Login</div>
                <Form
                    name='login-form'
                    layout='vertical'
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        label="Username or email"
                    >
                        <Input placeholder='Enter the username or email' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                    >
                        <Input placeholder='Enter the Password' />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>Login</Button>
                </Form>
            </div>
        </>
    )
}
