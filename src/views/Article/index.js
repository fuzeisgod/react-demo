import React, { Component } from 'react'

import { Card, Button, Table, Tag, Space } from 'antd'

import { getArticles } from '../../requests'

export default class Article extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
            ],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '操作',
                    dataIndex: 'actions',
                    key: 'actions',
                    render: (text, record, index) => {
                        return <Button>编辑</Button>
                    }
                }
            ],
            total: 0
        }
    }
    componentDidMount() {
        getArticles()
            .then(res => {
                console.log(res)
                this.setState({
                    total: res.data.total
                })
            })
    }
    render() {
        return (
            <div>
                <Card title="Card title" bordered={false} extra={<Button>导出excel</Button>}>
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.dataSource}
                        loading={false}
                        pagination={{
                            total:this.state.total,
                            hideOnSinglePage: true
                        }}
                    />
                </Card>
            </div>
        )
    }
}
