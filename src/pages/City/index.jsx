import React from "react";
import CityHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import CityLists from "./CityLists";

import {useSelector,useDispatch}from 'react-redux'
import { changeCity } from "../../redux/actions/city";

import {useNavigate} from 'react-router-dom'

const City = ()=>{
  const dispatch = useDispatch()
  const city = useSelector(state=>state.city)

  const navigate = useNavigate()

  function onCityEvent(city){
    dispatch(changeCity(city))
    navigate("/")
  }
  return(
    <div>
      <CityHeader title="城市选择"/>
      <CurrentCity city={city.cityName}/>
      <CityList onEvent={onCityEvent}/>
      <CityLists onEvent={onCityEvent}/>
    </div>
  )
}

export default City