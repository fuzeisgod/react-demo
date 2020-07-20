import axios from 'axios'

import {message} from 'antd'

const isDev = process.env.NODE_ENV === 'development'

const service = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/261145' : ''
})

service.interceptors.request.use((config) => {
    config.data = Object.assign({}, config.data, {
        // autoToken: window.localStorage.getItem('authToken'),
        autoToken: 'fuzzy'
    })
    return config
})

service.interceptors.response.use((res) => {
    if (res.data.code === 200) {
        return res.data.data
    } else {
        // 全局处理错误
        message.error(res.data.errMsg);
    }
})

export const getArticles = (offset = 0, limited = 10) => {
    return service.post('/api/v1/articleList', {
        offset,
        limited
    })
}