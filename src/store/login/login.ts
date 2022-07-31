import { Module } from 'vuex'
import { I_root_state } from './types'
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
  mutations: {},
  actions: {
    account_login_action({ commit }, payload: any) {
      console.log('zhix', payload)
    }
  }
}

export default login_module
