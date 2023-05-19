import {useEffect, useState} from "react"
import api from '../../../../api'
import HomeHotView from "../HomeHotView"

const HomeHotList = (props)=>{
  const [hot1List,setHot1List] = useState([])
  const [hot2List,setHot2List] = useState([])
  const [city,setCity] = useState(props.cityName)

  useEffect(()=>{
    api.getHomeHot1({
      cityName:props.cityName
    }).then(res=>{
      const {status,result,city} = res.data
      if(status===200){
        setHot1List(result)
        setCity(city)
      }
    })
  },[props.cityName])

  useEffect(()=>{
    api.getHomeHot2({
      cityName:props.cityName
    }).then(res=>{
      const {status,result,city} = res.data
      if(status===200){
        setHot2List(result)
        setCity(city)
      }
    })
  },[props.cityName])

  return(
    <div>
      {
        hot1List.length>0?
        <HomeHotView data={hot1List} title={'热门商品'} city={city}/>:
        <div>等待数据加载</div>
      }
      {
        hot2List.length>0?
        <HomeHotView data={hot2List} title={'新品推荐'} city={city}/>:
        <div>等待数据加载</div>
      }
    </div>
  )
}

export default HomeHotList