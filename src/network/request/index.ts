import axios from 'axios'
import { ElLoading } from 'element-plus'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface Request_interceptors {
    requestIntercepter?: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestInterceptorCatch?: (error: any) => any
    responseIntercepter?: (res: AxiosResponse) => any
    responseInterceptorCatch?: (error: any) => any
}

interface dm_request_config extends AxiosRequestConfig {
    interceptors?: Request_interceptors
}

class request_DMB {
    instance: AxiosInstance
    interceptors?: Request_interceptors
    constructor(config: dm_request_config) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        //这个是从config取出的拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.requestIntercepter,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseIntercepter,
            this.interceptors?.responseInterceptorCatch
        )
        //这个是全局默认存在的拦截器
        this.instance.interceptors.request.use((config) => {
            ElLoading.service({
                lock: true,
                text: '稍等一下'
            })
            console.log('所有请求都有的拦截器')
            return config
        })
        this.instance.interceptors.response.use(
            (res) => {
                ElLoading.service().close()
                return res
            },
            (error) => {
                console.log('所有请求失败的拦截器')
                if (error.response.status === 404) {
                    console.log('404错误')
                }
                return error
            }
        )
    }
    request<T>(config: dm_request_config): Promise<T> {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestIntercepter) {
                config = config.interceptors.requestIntercepter(config)
            }
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    get<T>(config: dm_request_config): Promise<T> {
        return this.request<T>({ ...config, method: 'GET' })
    }
    post<T>(config: dm_request_config): Promise<T> {
        return this.request<T>({ ...config, method: 'POST' })
    }
    delete<T>(config: dm_request_config): Promise<T> {
        return this.request<T>({ ...config, method: 'DELETE' })
    }
    pacth<T>(config: dm_request_config): Promise<T> {
        return this.request<T>({ ...config, method: 'PATCH' })
    }
}

export default request_DMB
