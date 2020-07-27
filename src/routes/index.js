import {
    Login,
    DashBoard,
    NotFound,
    Setting,
    ArticleList,
    ArticleEdit,
    Notifications
} from '../views'

// nav 图标
import { DashboardOutlined, UnorderedListOutlined, SettingOutlined } from '@ant-design/icons'

// 配置主路由
export const mainRoutes = [{
    pathName: '/login',
    component: Login
}, {
    pathName: '/404',
    component: NotFound
}]

export const adminRoutes = [{
    pathName: '/admin/dashboard',
    component: DashBoard,
    title: '仪表盘',
    isNav: true,
    icon:DashboardOutlined
}, {
    pathName: '/admin/article',
    component: ArticleList,
    exact: true,
    title: '文章管理',
    isNav: true,
    icon: UnorderedListOutlined
}, {
    pathName: '/admin/article/edit/:id',
    component: ArticleEdit
}, {
    pathName: '/admin/setting',
    component: Setting,
    title: '设置',
    isNav: true,
    icon: SettingOutlined
}, {
    pathName: '/admin/notifications',
    component: Notifications
}]