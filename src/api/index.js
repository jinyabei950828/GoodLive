import axios from '../utils/request'

const base = {
  baseUrl:"http://localhost:8000"
}

const path = {
  homehot1:"/api/home/hot1",
  homehot2:"/api/home/hot2",
  cityUrl:"/api/aj/getcitycode",
  search:"/api/search",
  details:"/api/details",
  login:"/api/login"
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
  },

  search(params){
    return axios.get(base.baseUrl+path.search,{
      params
    })
  },

  details(params){
    return axios.get(base.baseUrl+path.details,{
      params
    })
  },

  login(params){
    return axios.post(base.baseUrl+path.login,params)
  }
}

export default api