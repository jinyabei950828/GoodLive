import React, { useEffect, useState } from "react"
import './style.less'

import CitySelect from 'react-city-select'
import cityData from '../../../data/city'

import api from "../../../api"

const CityLists = (props)=>{
  const [citysData,setCityData]=useState(cityData)

  function handleSelectCity(cityData){
    props.onEvent(cityData.name)
  }

  useEffect(()=>{
    api.getCityList().then(res=>{
      if(res.status===200){
        setCityData(res.data.result.citylist)
      }
    })
  },[])

  return(
    <div className="citylists">
      <h3>城市列表</h3>
      <CitySelect
        data = {citysData}
        onSelectItem = {handleSelectCity}
      />
    </div>
  )
}

export default CityLists