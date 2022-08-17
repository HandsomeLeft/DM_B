import { Module } from 'vuex'
import { I_root_state } from './types'
import {
    account_login_action,
    request_user_info,
    request_user_menus
} from '@/network/login/login'
import local_cache from '@/utils/cache'
import router from '@/router/index'
interface I_login_state {
    token: string
    user_info: any
    user_menus: any
}
const login_module: Module<I_login_state, I_root_state> = {
    namespaced: true,
    state() {
        return {
            token: '',
            user_info: {},
            user_menus: []
        }
    },
    getters: {},
    mutations: {
        change_token(state, token: string) {
            state.token = token
        },
        change_user_info(state, user_info) {
            state.user_info = user_info
        },
        change_user_menus(state, user_menus) {
            state.user_menus = user_menus
        }
    },
    actions: {
        async account_login_action({ commit }, payload: any) {
            console.log('zhix', payload)
            const login_result: any = await account_login_action(payload)
            const { id, token } = login_result.data.data
            console.log(token)
            console.log(id)
            commit('change_token', token)
            local_cache.set_cache('token', token)

            const user_info_result: any = await request_user_info(id)
            const user_info = user_info_result.data
            console.log(user_info)
            commit('change_user_info', user_info)
            local_cache.set_cache('user_info', user_info)

            const user_menus_result: any = await request_user_menus(
                user_info.data.role.id
            )
            const user_menus = user_menus_result.data
            console.log(user_menus.data)
            commit('change_user_menus', user_menus.data)
            local_cache.set_cache('user_menus', user_menus)
            router.push('/main')
        }
    }
}

export default login_module
