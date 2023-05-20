import React,{useEffect} from "react";
import OrderHeader from '../../components/PubHeader'
import UserInfo from "./UserInfo";
import OrderList from "./OrderList";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Order = ()=>{
  const city = useSelector(state=>state.city)
  const user = useSelector(state=>state.login.user)

  const navigator = useNavigate()

  useEffect(()=>{
    if(!user.token){
      navigator("/login")
    }
  },[])

  return(
    <div>
      <OrderHeader title={"订单评价"}/>
      <UserInfo city={city} user={user}/>
      <OrderList user={user}/>
    </div>
  )
}

export default Order