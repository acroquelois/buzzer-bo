import http from '../../api/http'

const state = {
  token: localStorage.getItem('token'),
}

const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
    localStorage.setItem('token', payload)
  }
}

const actions = {
  async logIn({ commit }, {username, password}) {
    const tokenResponse = await http.post(`auth/login`, {'email': username, 'password': password})
    commit('SET_TOKEN', tokenResponse.data.token)
  }
}

export const auth = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
}
