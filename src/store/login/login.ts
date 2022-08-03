import { Module } from 'vuex'
import { I_root_state } from './types'
import { account_login_action, request_user_info } from '@/network/login/login'
interface I_login_state {
  token: string
  user_info: any
}
const login_module: Module<I_login_state, I_root_state> = {
  namespaced: true,
  state() {
    return {
      token: '',
      user_info: {}
    }
  },
  getters: {},
  mutations: {
    change_token(state, token: string) {
      state.token = token
    },
    change_user_info(state, user_info) {
      state.user_info = user_info
    }
  },
  actions: {
    async account_login_action({ commit }, payload: any) {
      console.log('zhix', payload)
      const login_result: any = await account_login_action(payload)
      const { id, token } = login_result.data.data
      console.log(token)

      commit('change_token', token)
      const user_info_result: any = await request_user_info(id)
      const user_info = user_info_result.data
      console.log(user_info)
      commit('change_user_info', user_info)
    }
  }
}

export default login_module
