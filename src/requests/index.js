import axios from 'axios'

import {message} from 'antd'

const isDev = process.env.NODE_ENV === 'development'

const service1 = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/261145' : ''
})

const service2 = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/261145' : ''
})

service1.interceptors.request.use((config) => {
    config.data = Object.assign({}, config.data, {
        // autoToken: window.localStorage.getItem('authToken'),
        authToken: 'fuzzy'
    })
    return config
})

service1.interceptors.response.use((res) => {
    if (res.data.code === 200) {
        return res.data.data
    } else {
        // 全局处理错误
        message.error(res.data.errMsg);
    }
})

// 获取文章列表
export const getArticles = (offset = 0, limited = 10) => {
    return service1.post('/api/v1/articleList', {
        offset,
        limited
    })
}

// 通过 id 删除文章
export const deleteArticle = (id) => {
    return service1.post(`/api/v1/articleDelete/${id}`)
}

// 通过id获取文章
export const getArticleById = (id) => {
    return service1.post(`/api/v1/article/${id}`)
}

// 通过id保存文章
export const saveArticle = (id, data) => {
    return service1.post(`/api/v1/articleEdit/${id}`, data)
}

// 通过文章阅读量
export const getArticleAmount = () => {
    return service1.post(`/api/v1/articleAmount`)
}

// 登录接口
// 登录没有用配置了拦截器的axios，因为此时还没有 authToken
export const loginRequest = (data) => {
    return service2.post('/api/v1/login',data)
}