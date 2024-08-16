// src/api/axios.ts
import axios from 'axios'

const baseURL = 'http://localhost:4000/api'
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors
    if (error.response.status === 401) {
      // Redirect to login or show a message
    }
    return Promise.reject(error)
  }
)


export default axiosInstance