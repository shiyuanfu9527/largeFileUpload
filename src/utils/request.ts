import axios ,{AxiosResponse} from 'axios'



// 设置请求头
const myBaseURL = 'https://localhost:3000'

// 创建axios实例
const service = axios.create({
    baseURL:myBaseURL,
    timeout:15000 
})
// 响应拦截
service.interceptors.response.use(
    (response:AxiosResponse)=>{
        return response.data
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default service