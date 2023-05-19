import axios from '../utils/request'

const base = {
  baseUrl:"http://localhost:8000"
}

const path = {
  homehot1:"/api/home/hot1",
  homehot2:"/api/home/hot2",
  cityUrl:"/api/aj/getcitycode"
}

const api  = {
  getHomeHot1(params){
    return axios.get(base.baseUrl+path.homehot1,{
      params
    })
  },

  getHomeHot2(params){
    return axios.get(base.baseUrl+path.homehot2,{
      params
    })
  },

  getCityList(){
    return axios.get(path.cityUrl)
  }
}

export default api