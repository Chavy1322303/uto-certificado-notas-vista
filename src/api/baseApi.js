import axios from 'axios'

const baseApi = axios.create({
    baseURL:'http://localhost:8081'
})



export default baseApi