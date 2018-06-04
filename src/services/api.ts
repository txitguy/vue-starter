import axios from 'axios'
import NProgress from 'nprogress'
import config from '../config'
import router from '../router'
import { BaseModel } from 'Src/models/baseModel';

// config axios
const instance = axios.create({
  baseURL: config.API_URL
})

// Request interceptor
instance.interceptors.request.use(config => {

  // Start NProgress
  NProgress.start()

  // If a model is passed to the body, convert it
  // to json
  if (config.data instanceof BaseModel) {
    config.data = config.data.toJson();
  }
  if (config.params instanceof BaseModel) {
    config.params = config.params.toJson();
  }

  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

// Response interceptor
instance.interceptors.response.use(res => {
  NProgress.done()
  if (res.data.code >= 300) {
    // Error logging
    // Notification.error(res.data.info)
  }
  if (res.data.code === 304) {
    router.push(config.LOGIN_ROUTE)
  }
  return res
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

export default instance
