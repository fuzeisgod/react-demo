import React, { Component, createRef } from 'react'

import { Card, Button, Form, Input, DatePicker, Spin, message } from 'antd'

import { getArticleById, saveArticle } from '../../requests'

import moment from 'moment'

import './edit.less'

import E from 'wangeditor'

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
    constructor() {
        super()
        this.editorRef = createRef()
        this.formRef = createRef()
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.initEditor()
        this.setState({
            isLoading: true
        })
        getArticleById(this.props.match.params)
            .then(res => {
                const { id, ...data } = res
                // 将时间戳转为moment对象
                data.createTime = moment(data.createTime)
                this.formRef.current.setFieldsValue(data)
                this.editor.txt.html(data.content)
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }

    initEditor = () => {
        // 存储在 this 上的值应该是一些不会因改变而触发二次渲染的值。
        // 需要注意的是，除了 setState 和 props 以外的任何东西都不会触发二次渲染。所以如果你将值存储在 this 上，并希望该值改变时能触发重新渲染那么你将需要在值改变后调用 forceUpdate()。
        this.editor = new E(this.editorRef.current)
        this.editor.customConfig.onchange = (html) => {
            // html 即变化之后的内容
            this.formRef.current.setFieldsValue({
                content: html
            })
        }
        this.editor.create()
    }

    onFinish = values => {
        this.setState({
            isLoading: true
        })
        // 将表单数据中的 createTime 从 moment 对象格式转化为时间戳格式。
        const data = Object.assign({}, values, {
            createTime: values.createTime.valueOf()
        })
        // ... 这里可以处理更多想要处理的逻辑
        saveArticle(this.props.match.params.id, data)
            .then(res => {
                message.success(res.msg)
                this.props.history.push('/admin/article')
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
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
                extra={<Button onClick={this.props.history.goBack}>取消</Button>}
            >
                <Spin spinning={this.state.isLoading}>
                    <Form
                        name="basic"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        ref={this.formRef}
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
                            label="发布时间"
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
                            <div className="qf-editor" ref={this.editorRef} />
                        </Form.Item>
                        <Form.Item
                            {...formButtonLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Card>
        )
    }
}
