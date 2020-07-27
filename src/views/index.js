import Loadable from 'react-loadable'
// 下面注释的这个文件就是一个简易的 react-loadable 的原理
// import Loadable from './myloadable'
import { Loading } from '../components'

// export { default as Login } from './Login'
// export { default as DashBoard } from './DashBoard'
// export { default as NotFound } from './NotFound'
// export { default as Setting } from './Setting'
// export { default as ArticleList } from './Article'
// export { default as ArticleEdit } from './Article/Edit'

// 路由懒加载（依赖插件 react-loadable）
// 只对 hash 格式的路由有效
const DashBoard = Loadable({
    loader: () => import('./DashBoard'),
    loading: Loading
})
const Login = Loadable({
    loader: () => import('./Login'),
    loading: Loading
})
const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading
})
const Setting = Loadable({
    loader: () => import('./Setting'),
    loading: Loading
})
const ArticleList = Loadable({
    loader: () => import('./Article'),
    loading: Loading
})
const ArticleEdit = Loadable({
    loader: () => import('./Article/Edit'),
    loading: Loading
})

const Notifications = Loadable({
    loader: () => import('./Notifications'),
    loading: Loading
})

export {
    DashBoard,
    Login,
    NotFound,
    Setting,
    ArticleList,
    ArticleEdit,
    Notifications
}