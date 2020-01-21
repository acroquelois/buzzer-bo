import axios from 'axios'
import {URL_API} from '../constants/constant'

const http = axios.create({
  baseURL: `${URL_API}`
})

export default http
