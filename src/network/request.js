import axios from 'axios'

export function request(config) {
    // 1,创建axios的实例
    const instance = axios.create({
      // baseURL: 'http://123.207.32.32:8000/api/hy',
      baseURL: 'http://123.207.32.32:8000/api/x6',
      timeout: 5000
    })
    // 2,axios的拦截器
    // 2.1请求拦截的作用
    instance.interceptors.request.use(config => {
      return config
    },err => {
      // 请求未发送出去的时候调用这里
      // console.log(err);
    })

    // 2.2响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    },err => {
      // console.log(err);
    })

    // 3,发送真正的网络请求(axios(config)本身会返回一个Promise)
    return instance(config)
}
