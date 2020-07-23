const state = {
  errors: {}
}

const getters = {
  getErrorInfo({ errors }) {
    return errors
  },
  isLoginError({ errors }) {
    if (Object.keys(errors).length) return true
    return false
  }
}

const mutations = {
  UPDATE_ERROR_INFO(state, payload) {
    state.errors = payload
  }
}

const actions = {
  async login({ commit }, payload) {
    try {
      const { status, data } = await this.$axios.post('login', payload)
      if (status == '200') {
        commit('user/UPDATE_USER_INFO', data, { root: true })
        commit('UPDATE_ERROR_INFO', {})
      } else {
        commit('UPDATE_ERROR_INFO', data)
      }
    } catch (error) {
      const res = error.response
      if (res.status == '422' || res.status == '401') {
        commit('UPDATE_ERROR_INFO', res.data)
      }
    }
  },
  async logout({ commit }) {
    try {
      const { status, data } = await this.$axios.get('logout')
      if (status == '200') {
        commit('user/UPDATE_USER_INFO', null, { root: true })
      } else {
        commit('UPDATE_ERROR_INFO', data)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
