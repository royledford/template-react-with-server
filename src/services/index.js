import { checkAuth } from '@/services/checkAuth'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // TODO should be true for a real app
  withCredentials: false,
  timeout: 30000,
  // headers: {
  //   Authorization: AuthUtils.getAuthToken(),
  //   'ngrok-skip-browser-warning': true,
  // },
})

api.interceptors.request.use((config) => {
  const overrideToken = config.override?.['Authorization']
  if (overrideToken) {
    delete config.override
    config.headers['Authorization'] = overrideToken
  } else {
    config.headers['Authorization'] = checkAuth()
  }
  return config
})

export default api
