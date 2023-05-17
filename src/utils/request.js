import axios from "axios";

const instance =axios.create({
  timeout:5000
})

instance.interceptors.request.use(
  config=>{
    if(config.method==='post'){
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error=>Promise.reject(error)
)