import React, { Component } from 'react'

import { Card, Button, Form, Input } from 'antd'

import { UserOutlined, LockOutlined } from '@ant-design/icons';

const layout = {
    // offset 左侧间隔数 	span 栅格占位格数
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

export default class Edit extends Component {
    onFinish = values => {
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Card
                title="文章编辑"
                bordered={false}
                extra={<Button>取消</Button>}
            >
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={
                            [
                                { required: true, message: '请填写用户名!' },
                                { type: 'string', min: 2, message: '名字过短！' },
                                { type: 'string', max: 8, message: '名字过长！' },
                                {
                                    // 接收 promise 作为返回值, Promise.reject / Promise.resolve
                                    validator: (_, value) => {
                                        console.log(value, typeof (value))
                                        if (value === '233') {
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        }
                                        return Promise.resolve()
                                    }
                                }
                            ]
                        }
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
