import {
    Login,
    DashBoard,
    NotFound,
    Setting,
    ArticleList,
    ArticleEdit
} from '../views'

// 配置主路由
export const mainRouter = [{
    pathName: '/login',
    component: Login
}, {
    pathName: '/404',
    component: NotFound
}]

export const adminRouter = [{
    pathName: '/admin/dashboard',
    component: DashBoard
}, {
    pathName: '/admin/setting',
    component: Setting
}, {
    pathName: '/admin/article',
    component: ArticleList,
    exact: true
}, {
    pathName: '/admin/article/edit/:id',
    component: ArticleEdit
}]