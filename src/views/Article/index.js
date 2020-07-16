import React, { Component } from 'react'

import { Card, Button } from 'antd'

export default class Article extends Component {
    render() {
        return (
            <div>
                <Card title="Card title" bordered={false} extra={<Button>导出excel</Button>}>
                   
                </Card>
            </div>
        )
    }
}
