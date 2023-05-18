import axios from '../utils/request'

const base = {
  baseUrl:"http://localhost:8000"
}

const path = {
  homehot1:"/api/home/hot1",
  homehot2:"/api/home/hot2"
}

const api  = {
  getHomeHot1(){
    return axios.get(base.baseUrl+path.homehot1)
  },

  getHomeHot2(){
    return axios.get(base.baseUrl+path.homehot2)
  }
}

export default api