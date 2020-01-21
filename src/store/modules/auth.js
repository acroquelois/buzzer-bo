import authResource from '../../api/ressources/auth'

const state = {
  token: localStorage.getItem('token'),
}

const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
    localStorage.setItem('token', payload)
    console.log('sest_token', localStorage.getItem('token'))
    axios.defaults.headers.common['Authorization'] = `Bearer ${payload}`;
  }
}

const actions = {
  async logIn({ commit }, {username, password}) {
    const tokenResponse = await authResource.token(username, password)
    commit('SET_TOKEN', tokenResponse.data.token)
  }
}

export const auth = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
}
