import axios from 'axios'
import Cookies from 'js-cookie'

// const isProduction = /production|staging/.test(process.env.NODE_ENV)
// console.log(process.env.NODE_ENV)
// console.log(process.env.VIRNECT_ENV)
// console.log(isProduction)

export const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: isProduction,
})
export async function getUrls() {
  const res = await axios.get(`${location.origin}/urls`)
  window.urls = res.data
  window.env = res.data.env
  setBaseURL(res.data)
  // console.log(location.origin)
  return res.data
}

const setBaseURL = baseURL => {
  const accessToken = Cookies.get('accessToken')

  if (!/production|staging/.test(baseURL.env)) {
    console.log(baseURL)
  }

  http.defaults.timeout = baseURL.timeout
  http.defaults['baseURL'] = baseURL.api
  http.defaults.withCredentials = /production|staging/.test(baseURL.env)
  http.defaults.headers['Access-Control-Allow-Origin'] = baseURL.api
  http.defaults.headers['Access-Control-Allow-Credentials'] =
    /production|staging/.test(baseURL.env)
  if (accessToken) {
    http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  }
  return baseURL
}

// module.exports = set
export default { http, getUrls, setBaseURL }
