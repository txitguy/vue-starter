import api from './api'

export default class CRUD {
  private getUrl: string = '';
  private queryUrl: string = '';
  private createUrl: string = '';
  private updateUrl: string = '';
  private destroyUrl: string = '';

  constructor () {
  }

  get (idParam: string|number, params: object) {
    return api.get(this.parseUrl(this.getUrl, idParam), params).then(res => {
      return res.data
    })
  }

  query (params: object) {
    return api.get(this.queryUrl, { params }).then(res => {
      return res.data
    })
  }

  create (data: object) {
    return api.post(this.createUrl, data).then(res => {
      return res.data
    })
  }

  update (idParam: any, data: object) {
    return api.put(this.parseUrl(this.updateUrl, idParam), this.filterData(data)).then(res => {
      return res.data
    })
  }

  destroy (data: object) {
    return api.delete(this.destroyUrl, {data}).then(res => {
      return res.data
    })
  }

  // handle url template
  parseUrl (url: string, params: any) {
    for (let i in params) {
      url = url.replace(':' + i, params[i])
    }
    return url
  }

  filterData (data: any) {
    delete data.info
    delete data.code
    return data
  }
}