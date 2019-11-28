import { IRouteProps } from '@/router/type'
import { ROUTER_INFO } from './constants';

import Login from '@/views/Login'

import HomeIndex from '@/views/Home'

const routesMap: Array<IRouteProps> = [
  {
    path: ROUTER_INFO.LOGIN.path,
    exact: true,
    component: Login,
    meta: {
        requiresAuth: false,      // 当前页面是否需要登录状态
        title: ROUTER_INFO.LOGIN.name,   // 网页标题
        isLoginToHome: true       // 如果当前登录状态跳转到后台首页
    }
  },
  {
    path: ROUTER_INFO.HOME.path,
    component: HomeIndex,
    meta: {
      requiresAuth: true,
    }
  }
]

export default routesMap