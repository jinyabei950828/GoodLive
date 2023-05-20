import React, { useEffect, useState } from "react";
import api from "../../../api";
import OrderListView from "../OrderListView";

const OrderList = (props)=>{

  const [orderListData,setOrderListData] = useState([])

  useEffect(()=>{
    api.commentOrder({
      username:props.user.nick
    }).then(res=>{
      const {status,result} = res.data
      if(status===200){
        setOrderListData(result)
      }
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return(
    <div>
      订单列表
      {
        orderListData.length>0?
        <OrderListView data={orderListData} user={props.user}/>:
        <div>等待数据加载</div>
      }
    </div>
  )
}

export default OrderList