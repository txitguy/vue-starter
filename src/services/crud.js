import api from './api'

class CRUD {
  constructor () {
    this.isRest = false
    this.getUrl = ''
    this.queryUrl = ''
    this.createUrl = ''
    this.updateUrl = ''
    this.destroyUrl = ''
  }

  get (idParam, params) {
    return api.get(this.parseUrl(this.getUrl, idParam), { params }).then(res => {
      return res.data
    })
  }

  query (params) {
    return api.get(this.queryUrl, { params }).then(res => {
      return res.data
    })
  }

  create (data) {
    return api.post(this.createUrl, data).then(res => {
      return res.data
    })
  }

  update (idParam, data) {
    return api.put(this.parseUrl(this.updateUrl, idParam), this.filterData(data)).then(res => {
      return res.data
    })
  }

  destroy (data) {
    return api.delete(this.destroyUrl, {data}).then(res => {
      return res.data
    })
  }

  // handle url template
  parseUrl (url, params) {
    for (let i in params) {
      url = url.replace(':' + i, params[i])
    }
    return url
  }

  // 过滤修改参数
  filterData (data) {
    delete data.info
    delete data.code
    return data
  }
}

export default CRUD
