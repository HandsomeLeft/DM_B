import request_dmb from '../index'

interface i_account {
  name: string
  password: string
}
enum login_api {
  account_login = '/login',
  login_user_info = '/users/',
  user_menus = '/role/'
}

export function account_login_action(account: i_account) {
  return request_dmb.post({
    url: login_api.account_login,
    data: account
  })
}

export function request_user_info(id: number) {
  return request_dmb.get({
    url: login_api.login_user_info + id
  })
}

export function request_user_menus(id: number) {
  return request_dmb.get({
    url: login_api.user_menus + id + '/menu'
  })
}
