import React,{useState,useEffect} from "react";
import DetailsView from "../DetailsView";
import api from '../../../api'

const DetailsList = (props)=>{
  const [detailsData,setDetailsData] = useState({})

  useEffect(()=>{
    api.details({
      id:props.id
    }).then(res=>{
      const {status,result} = res.data
      if(status===200){
        setDetailsData(result)
      }
    })
  },[props.id])
  return(
    <div>
      {
        detailsData.imgs?
        <DetailsView detailsData={detailsData} id={props.id}/>:
        <div>等待数据加载</div>
      }
    </div>
  )
}

export default DetailsList