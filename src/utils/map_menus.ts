import menu from '@/router/main/system/menu/menu'
import { RouteRecordRaw } from 'vue-router'

export function map_menus_to_rotes(user_menus: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //先去加载所有默认的routes
  const all_routes: RouteRecordRaw[] = []
  //这是webpack内置的对象，帮助查找文件夹
  const route_files = require.context('../router/main', true, /\.ts/)
  route_files.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    all_routes.push(route.default)
  })
  console.log(all_routes)

  //根据菜单获取需要添加的routes
  const _recurse_get_route = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = all_routes.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routes.push(route)
        }
      } else {
        _recurse_get_route(menu.children)
      }
    }
  }
  _recurse_get_route(user_menus)

  return routes
}
