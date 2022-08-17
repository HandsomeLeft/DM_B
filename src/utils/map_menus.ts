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

  return routes
}
