import React from 'react'
import { Form, Input, Checkbox, Button, notification } from 'antd'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../../Redux/Actions/UserAction';

export default function Register() {
    const [api, contextHolder] = notification.useNotification();
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const onFinish = (val: any) => {
        dispatch(RegisterUser(val)).then((data: any) => {
            if (data.payload.status === 201) {
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
                <div className="title">Register</div>
                <Form
                    name='login-form'
                    layout='vertical'
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="firstname"
                        label="Firstname"
                    >
                        <Input placeholder='Enter the Firstname' />
                    </Form.Item>
                    <Form.Item
                        name="lastname"
                        label="Lastname"
                    >
                        <Input placeholder='Enter the lastname' />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        label="Username"
                    >
                        <Input placeholder='Enter the username' />
                    </Form.Item>

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
                    <Form.Item
                        name="confirm_password"
                        label="Confirm Password"
                    >
                        <Input placeholder='Enter the Confirm password' />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>Register</Button>
                </Form>
            </div>
        </>
    )
}