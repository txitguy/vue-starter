import * as types from '../mutation-types'

const state = {
  adminRoles: []
}

const getters = {
  adminRoles: state => state.adminRoles
}

const actions = {
  loadAdminRoles ({commit}) {
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
