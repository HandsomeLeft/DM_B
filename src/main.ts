import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './network/axios.demo'
import request_dmb from './network'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
// console.log(process.env.VUE_APP_BASE_URL)

request_dmb.request({
  url: 'home/multidata',
  method: 'get'
})
