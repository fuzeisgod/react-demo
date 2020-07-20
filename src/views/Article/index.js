import React, { Component } from 'react'

import { Card, Button, Table, Tag, Space } from 'antd'

import { getArticles } from '../../requests'

import moment from 'moment'

const titleDisplayMap = {
    id: 'id',
    title: '标题',
    author: '作者',
    amount: '阅读量',
    createTime: '创建时间'
}

export default class Article extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            columns: [],
            total: 0,
            isLoading: false,
            offset: 0,
            limited: 10
        }
    }
    componentDidMount() {
        this.getData()
    }
    createColumns = (columnKeys) => {
        const columns = columnKeys.map(item => {
            if (item === 'amount') {
                return {
                    title: titleDisplayMap[item],
                    key: item,
                    render: (text, record, index) => {
                        const { amount } = record
                        return <Tag color={amount > 225 ? 'red' : 'green'}>{record.amount}</Tag>
                    }
                }
            }
            if (item === 'createTime') {
                return {
                    title: titleDisplayMap[item],
                    key: item,
                    render: (text, record) => {
                        const { createTime } = record
                        return moment(createTime).format('YYYY年MM月DD日 HH时mm分ss秒')
                    }
                }
            }
            return {
                title: titleDisplayMap[item],
                dataIndex: item,
                key: item,
            }

        })
        columns.push({
            title: '操作',
            key: 'action',
            render: () => {
                return <><Button size="small" type="primary">编辑</Button><Button size="small" danger>删除</Button></>
            }
        })
        return columns
    }
    getData = () => {
        this.setState({
            isLoading: true
        })
        getArticles(this.state.offset, this.state.limited)
            .then(res => {
                const columnKeys = Object.keys(res.list[0])
                const columns = this.createColumns(columnKeys)
                this.setState({
                    total: res.total,
                    columns,
                    dataSource: res.list
                })
            })
            .catch(err => {
                // 处理错误，虽然有全局处理
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }
    onPageChange = (page, pageSize) => {
        // setState(updater, [callback])
        // setState() 并不总是立即更新组件。它会批量推迟更新
        // 在回调中调用请求可以保证在应用更新后触发
        this.setState({
            offset: pageSize * (page - 1),
            limited: pageSize
        }, () => {
            this.getData()
        })
    }
    onShowSizeChange = (current, size) => {
        this.setState({
            offset: 0,
            limited: size
        }, () => {
            this.getData()
        })
    }
    render() {
        return (
            <div>
                <Card title="文章列表" bordered={false} extra={<Button>导出excel</Button>}>
                    <Table
                        rowKey={record => record.id}
                        columns={this.state.columns}
                        dataSource={this.state.dataSource}
                        loading={this.state.isLoading}
                        pagination={{
                            total: this.state.total,
                            hideOnSinglePage: true,
                            showSizeChanger: true,
                            onChange: this.onPageChange,
                            onShowSizeChange: this.onShowSizeChange
                        }}
                    />
                </Card>
            </div>
        )
    }
}
