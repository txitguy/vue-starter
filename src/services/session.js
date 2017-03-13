import storage from './storage'
class Session {
  constructor () {
    this.test = 2
  }

  create (user) {
    storage.setItem('loggedUser', user)
  }

  destroy () {
    storage.removeItem('loggedUser')
  }

  get () {
    return storage.getItem('loggedUser') || {}
  }
}

export default new Session()
