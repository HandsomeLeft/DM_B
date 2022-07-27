import request_DMB from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const request_dmb = new request_DMB({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestIntercepter: (config) => {
      console.log('成功')
      const token = '1'
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseIntercepter: (res) => {
      console.log('响应成功')
      // console.log(res)

      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})

export default request_dmb
