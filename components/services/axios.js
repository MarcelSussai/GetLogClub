import axios from "axios";


const dev = false
const url =  dev ? 'http://localhost:3001/' : 'https://app.getlogclub.com.br/'

export const axiosSimp = axios.create({
  baseURL: url,
  // baseURL: `http://localhost:3001/`,
  timeout: 1000,
})
