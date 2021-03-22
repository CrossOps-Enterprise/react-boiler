import axios from 'axios'
import config from '../config'

const getToken = () => {
  return JSON.parse(sessionStorage.getItem('apiToken') || null)
}

const instance = axios.create({
  baseURL: config.apiHost,
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
})

export default instance
