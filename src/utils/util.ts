export default {
  emptyPageOptions (params: any) {
    for (var i in params) {
      params[i] = null
    }
    params.page = 1
    params.total = 0
    params.count = 10
    return params
  }
}
