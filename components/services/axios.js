import axios from "axios";

export const axiosSimp = axios.create({
  // baseURL: `http://app.getlogclub.com.br/`,
  baseURL: `http://localhost:3001/`,
  timeout: 1000,
})
