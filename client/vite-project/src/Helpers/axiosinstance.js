import axios from 'axios'
const BASE_URL =  
//  "http://localhost:5001/api/v1"
"https://lms-project-4.onrender.com/api/v1"

const axiosInstance = axios.create()
axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.withCredentials = true


export default axiosInstance