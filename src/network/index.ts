import request_DMB from './request/request'
import { BASE_URL, TIME_OUT } from './request/config'

const request_dmb = new request_DMB({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default request_dmb
