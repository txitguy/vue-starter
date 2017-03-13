import adminRole from 'services/adminRole'
import * as types from '../mutation-types'

const state = {
  adminRoles: []
}

const getters = {
  adminRoles: state => state.adminRoles
}

const actions = {
  loadAdminRoles ({commit}) {
    adminRole.list().then(data => {
      if (data.code === 200 && data.list) {
        commit(types.LOAD_ADMIN_ROLES, data.list)
      }
    })
  }
}

const mutations = {
  LOAD_ADMIN_ROLES (state, adminRoles) {
    state.adminRoles = adminRoles
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
