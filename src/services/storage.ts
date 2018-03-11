export default {
  setItem,
  getItem,
  removeItem,
  clear,
  getLength
}

function setItem (key: string, value: any) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

function getItem (key: string) {
  let item = window.localStorage.getItem(key)
  if (item && _isJSON(item)) {
    item = JSON.parse(item)
  }
  return item
}

function removeItem (key: string) {
  var item = window.localStorage.getItem(key)
  if (item) {
    window.localStorage.removeItem(key)
    return true
  } else {
    return false
  }
}

function clear () {
  return window.localStorage.clear()
}

function getLength () {
  return window.localStorage.length
}

function _isJSON (item: string) {
  return /{.*}/.test(item)
}
