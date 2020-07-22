import React, { Component } from 'react'

import { Card, Button, Form, Input, DatePicker } from 'antd'

import { UserOutlined, LockOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 16
    }
}

const formButtonLayout = {
    wrapperCol: {
        offset: 4
    }
}

export default class Edit extends Component {
    onFinish = values => {
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    onOk = (value) => {
        console.log('onOk: ', value);
    }

    render() {
        return (
            <Card
                title="文章编辑"
                bordered={false}
                extra={<Button>取消</Button>}
            >
                <Form
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        {...formItemLayout}
                        label="标题"
                        name="title"
                        rules={
                            [
                                { required: true, message: '标题是必须的!' }
                            ]
                        }
                    >
                        <Input placeholder="标题" />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="作者"
                        name="author"
                        rules={
                            [
                                { required: true, message: '作者是必须的!' }
                            ]
                        }
                    >
                        <Input placeholder="作者" />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="阅读量"
                        name="amount"
                        rules={
                            [
                                { required: true, message: '阅读量是必须的!' }
                            ]
                        }
                    >
                        <Input placeholder="0" />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="创建时间"
                        name="createTime"
                        rules={
                            [
                                { required: true, message: '时间是必须的!' }
                            ]
                        }
                    >
                        <DatePicker showTime onChange={this.onChange} onOk={this.onOk} placeholder="选择时间" />
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="内容"
                        name="content"
                        rules={
                            [
                                { required: true, message: '内容是必须的!' }
                            ]
                        }
                    >
                        <div>这里是内容</div>
                    </Form.Item>
                    <Form.Item
                        {...formButtonLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
