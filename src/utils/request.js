import axios from "axios";
import { baseURL } from "@/config";
import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
  baseURL,
  timeout: 2000,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["X-token"] = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.request.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 10000) Message.error(res.message);
    // 登录超时
    if (res.code === -2) {
      localStorage.removeItem("token");
      window.location.href = location.origin + "/cms-manage/#/login";
    }
    return res;
  },
  (error) => {
    console.log("error" + error);
    return Promise.reject(error);
  }
);

export default service;
