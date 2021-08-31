import axios from "axios";

export const axiosSimp = axios.create({
  baseURL: `https://app.getlogclub.com.br/`,
  timeout: 1000
})
