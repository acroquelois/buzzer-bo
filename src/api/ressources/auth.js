import http from '../http'

const authResource = {
  async token(username, password) {
    const response = await http.post(`auth/login`, {'email': username, 'password': password})
    return response
  }
//   async reset({username}) {
//     const response = await api.post(`${resource}/resetpasswordbo`, {mail: username})
//     return response.data
//   },
//   async resetPwd({password, token}) {
//     const response = await api.post(`${resource}/password`, {password}, {headers: {'Authorization': `Bearer ${token}`}})
//     return response.data
//   }
}

export default authResource
