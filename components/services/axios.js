import axios from "axios";


const dev = true
export const url =  dev ? 'http://localhost:3001/' : 'https://app.getlogclub.com.br/'

export const axiosSimp = axios.create({
  baseURL: url,
  // timeout: 1000,
})
