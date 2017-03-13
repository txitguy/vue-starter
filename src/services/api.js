import axios from 'axios'
import NProgress from 'nprogress'
import { Notification } from 'element-ui'
import config from '../config'
import router from '../router'

// config axios
const instance = axios.create({
  baseURL: config.API_PATH
})

// NProgress loading
instance.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  NProgress.done()
  // 大于300 提示
  if (res.data.code >= 300) {
    Notification.error(res.data.info)
  }
  // 拦截304 跳转登录界面
  if (res.data.code === 304) {
    router.push('/auth')
  }
  // 转换分页信息
  if (res.data.page) {
    res.data.meta = {
      page: +res.data.page,
      count: +res.data.count,
      total: +res.data.total
    }
  }
  return res
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

export default instance
