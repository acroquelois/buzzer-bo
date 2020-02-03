import http from '../../api/http'
import * as jwtDecode from 'jwt-decode';

const state = {
  token: localStorage.getItem('token'),
}

const getters = {
  isLogged (state) {
    if (!state.token) return false

    const decoded = jwtDecode(state.token)
    if (!decoded.exp) return false

    return decoded.exp * 1000 > Date.now();
  }
}

const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
    localStorage.setItem('token', payload)
  },
  REMOVE_TOKEN(state, payload) {
    state.token = payload
    localStorage.removeItem('token')
  }
}


const actions = {
  async logIn({ commit }, {username, password}) {
    const tokenResponse = await http.post(`auth/login`, {'email': username, 'password': password})
    commit('SET_TOKEN', tokenResponse.data.token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;
  },
  logOut({ commit }) {
    commit('REMOVE_TOKEN', null)
  }
}

export const auth = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
