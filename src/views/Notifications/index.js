import React, { Component } from 'react'

import {
    Card,
    Button,
    List,
    Badge,
    Spin
} from 'antd'

import { connect } from 'react-redux'

import { markNotificationsAsReadById, markAllNotificationsAsRead } from '../../actions/notification'

const mapStateToProps = (state) => {
    const {
        list,
        isLoading
    } = state.notification
    return {
        list,
        isLoading
    }
}

@connect(mapStateToProps, { markNotificationsAsReadById, markAllNotificationsAsRead })
class Notifications extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <Spin spinning={this.props.isLoading}>
                    <Card title="通知中心" bordered={false} extra={<Button disabled={this.props.list.every(item => item.hasRead === true)} onClick={this.props.markAllNotificationsAsRead}>全部标记为已读</Button>}>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.props.list}
                            renderItem={item => (
                                // react 中表示无元素可以用 null 表示
                                <List.Item
                                    actions={[
                                        item.hasRead ?
                                            null
                                            :
                                            <Button onClick={this.props.markNotificationsAsReadById.bind(this, item.id)}>标记为已读</Button>
                                    ]}
                                >
                                    <List.Item.Meta
                                        title={<Badge dot={item.hasRead ? false : true} offset={[8, 0]}>{item.title}</Badge>}
                                        description={item.desc}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Spin>
            </>
        )
    }
}

export default Notifications