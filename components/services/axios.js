import axios from "axios";

export const axiosSimp = axios.create({
  baseURL: `app.getlogclub.com.br/`,
  timeout: 1000
})
