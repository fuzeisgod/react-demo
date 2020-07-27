import React, { Component, createRef } from 'react'

import {
    Card,
    Row,
    Col
} from 'antd'

import {
    getArticleAmount
} from '../../requests'

import './dashboard.less'

import echarts from 'echarts'

export default class DashBoard extends Component {
    constructor() {
        super()
        this.articleAmount = createRef()
    }

    initArticleChart = () => {
        getArticleAmount()
            .then(res => {
                const option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ["一月", "二月", "三月", "四月", "五月", "六月"]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        type: 'line',
                        data: JSON.parse(res.amount),
                        areaStyle: {}
                    }]
                };
                this.articleChart.setOption(option)
            })
    }

    componentDidMount() {
        this.articleChart = echarts.init(this.articleAmount.current)
        this.initArticleChart()

    }

    render() {
        return (
            <>
                <Card
                    title="概览"
                    bordered={false}
                >
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box" style={{ backgroundColor: '#29b6f6' }}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box" style={{ backgroundColor: '#ab47bc' }}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box" style={{ backgroundColor: '#ff7043' }}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box" style={{ backgroundColor: '#43a047' }}>col-6</div>
                        </Col>
                    </Row>
                </Card>
                <Card
                    title="最近浏览量"
                    bordered={false}
                >
                    <div ref={this.articleAmount} style={{ height: '400px' }} />
                </Card>
            </>
        )
    }
}
