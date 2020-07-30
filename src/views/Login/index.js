import React, { Component } from 'react'

import { Form, Input, Button, Checkbox, Card, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'

import { login } from '../../actions/login'

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

const mapStateToProps = state => {
    return {
        isLogin: state.login.isLogin,
        isLoading: state.login.isLoading
    }
}

@connect(mapStateToProps, { login })
class Login extends Component {

    onFinish = values => {
        console.log('Received values of form: ', values);
        this.props.login(values)
    };

    render() {
        return (
            this.props.isLogin
                ?
                <Redirect to="/admin" />
                :
                <Spin spinning={this.props.isLoading}>
                    <Card
                        title="Fuzzy admin 登录"
                        bordered={false}
                        className="fuzzy-login-wrapper"
                    >
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '用户名是必须的！' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '密码是必须的！' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>记住我</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button loading={this.props.isLoading} type="primary" htmlType="submit" className="login-form-button" block>
                                    登录
                        </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Spin>
        )
    }
}

export default Login