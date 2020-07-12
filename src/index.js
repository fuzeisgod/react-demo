import React from 'react'
import { render } from 'react-dom'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'
import App from './App'

render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>,
    document.querySelector('#root')
)