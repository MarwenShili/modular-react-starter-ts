import { clearTokens, getTokens, setTokens } from './token'
import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_BASE_URL as string
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const axiosInstance = axios.create({
  baseURL,
  headers,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const { access_token } = getTokens()
    if (access_token) {
      config.headers['Authorization'] = `Bearer ${access_token}`
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const previousRequest = error?.config
    if (error?.response?.status === 401 && !previousRequest?.sent) {
      previousRequest.sent = true
      try {
        const response = await axiosInstance.get('/api/auth/refresh')
        const { accessToken } = response.data.payload
        setTokens(accessToken)
        previousRequest.headers['Authorization'] = `Bearer ${accessToken}`
        return axiosInstance(previousRequest)
      } catch (err) {
        clearTokens()
        window.location.replace('/')
      }
    }
    return Promise.reject((error.response && error.response.data) || 'Something went wrong!')
  },
)

export default axiosInstance
