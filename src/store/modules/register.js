const state = {
  errors: {}
}

const getters = {
  getErrorInfo({ errors }) {
    return errors
  },
  isRegisterError({ errors }) {
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
  async register({ commit }, payload) {
    try {
      const { status, data } = await this.$axios.post('register', payload)
      if (status == '200') {
        commit('user/UPDATE_USER_INFO', data, { root: true })
      } else {
        commit('UPDATE_ERROR_INFO', data)
      }
    } catch (error) {
      const res = error.response
      commit('UPDATE_ERROR_INFO', res.data)
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
