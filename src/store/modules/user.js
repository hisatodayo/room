const state = {
  userInfo: {
    id: '',
    name: '',
    email: '',
    password: ''
  }
}

const getters = {
  getUserId({ id }) {
    return id
  },
  getUserName({ name }) {
    return name
  },
  getUserEmail({ email }) {
    return email
  },
  getUserPassword({ password }) {
    return password
  }
}

const mutations = {
  UPDATE_USER_INFO(state, payload) {
    if (!payload || !Object.keys(payload).length) {
      state.userInfo = Object.assign({}, state.userInfo)
    }

    state.userInfo = payload
  }
}

const actions = {
  async checkLogin({ commit }) {
    let user = {}

    try {
      const { data } = await this.$axios.get(`user/self`)
      user = data
      commit('UPDATE_USER_INFO', data)
    } catch (error) {
      console.log(error)
    }

    return user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
