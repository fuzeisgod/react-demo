import axios from 'axios'

const ajax = axios.create({
    baseURL: ''
})

export const getPost = () => {
    return ajax.get('/posts')
}