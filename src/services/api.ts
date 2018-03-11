import axios from 'axios'
import NProgress from 'nprogress'
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
  if (res.data.code >= 300) {
    // Error logging
    // Notification.error(res.data.info)
  }
  if (res.data.code === 304) {
    router.push('/auth')
  }
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
