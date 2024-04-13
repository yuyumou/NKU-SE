import axios from 'axios'

export default (vm) => {
  axios.interceptors.request.use((config) => {
    var jwtToken = window.localStorage.getItem('token')
    if (jwtToken) {
      config.headers.Authorization = jwtToken
    }
    return config
  })

  axios.interceptors.response.use(res => {
    console.log('response')
    return res
  })
}
