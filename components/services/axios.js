import axios from "axios";

export const axiosSimp = axios.create({
  baseURL: `http://app.getlogclub.com.br`,
  timeout: 1000
})
