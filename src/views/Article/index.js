import React, { Component } from 'react'

import { Card, Button, Table, Tag, Modal, message, Tooltip } from 'antd'

import { getArticles, deleteArticle } from '../../requests'

import moment from 'moment'

import XLSX from 'xlsx'

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
                        return <Tooltip title={amount > 225 ? 'hot' : ''}><Tag color={amount > 225 ? 'red' : 'green'}>{record.amount}</Tag></Tooltip>
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
            render: (text, record) => {
                return (
                    <>
                        <Button size="small" type="primary" onClick={this.toEdit.bind(this, record.id)}>编辑</Button>
                        <Button size="small" danger onClick={this.deleteArticle.bind(this, record)}>删除</Button>
                    </>
                )
            }
        })
        return columns
    }
    deleteArticle = (record) => {
        Modal.confirm({
            title: (<div>确定要删除<span style={{ color: 'red', padding: '0 3px' }}>{record.title}</span>吗？</div>),
            content: `此操作不可逆，请谨慎！`,
            okText: '确认删除！',
            cancelText: '我点错了！',
            centered: true,
            onCancel() {
                console.log('cancel')
            },
            onOk: () => {
                // 返回 promise 时可异步关闭
                return deleteArticle(record.id)
                    .then(res => {
                        message.success(res.msg)
                        // 这里沟通的时候有坑，究竟是留在当前页还是回到第一页？
                        // 这里的需求是回到第一页
                        this.setState({
                            offset: 0
                        }, () => {
                            this.getData()
                        })
                    })
            }
        })
    }

    toEdit = (id) => {
        this.props.history.push(`/admin/article/edit/${id}`)
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
    toExcel = () => {
        // 在实际的项目中，实际上这个功能是前端发送一个ajax请求到后端，然后后端返回一个文件下载的地址。
        /* convert state to workbook */
        const data = [Object.keys(this.state.dataSource[0])] // ['id', 'title', 'author', 'amount', 'createTime']
        for (let i = 0; i < this.state.dataSource.length; i++) {
            // data.push(Object.values(this.state.dataSource[i]))
            data.push([
                this.state.dataSource[i].id,
                this.state.dataSource[i].title,
                this.state.dataSource[i].author,
                this.state.dataSource[i].amount,
                moment(this.state.dataSource[i].createTime).format('YYYY年MM月DD日 HH时mm分ss秒')
            ])
        }
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, "sheetjs.xlsx")
    }
    render() {
        return (
            <div>
                <Card title="文章列表" bordered={false} extra={<Button onClick={this.toExcel}>导出excel</Button>}>
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
