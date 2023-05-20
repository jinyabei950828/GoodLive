import React, { useState } from "react";
import './style.less'
import DefaultImg from '../../../../assets/images/default.png'
import { loadImageAsync } from "../../../../utils/loadImg";

import{Link} from 'react-router-dom'

const Item = (props)=>{
  const [currentImg,setcurrentImg] = useState(DefaultImg)

  const data = props.data
  loadImageAsync(data.img).then(res=>{
    setcurrentImg(res)
  }).catch(err=>{
    console.log(err)
  })

  return(
    <div className="list-item">
      <Link to={`/details/${data.id}`}>
        <img src={currentImg} alt=""/>
        <div className="mask">
          <div className="left">
            <p>{data.title}</p>
            <p>{data.houseType}</p>
          </div>
          <div className="right">
            <div className="btn">
              {data.rentType}
            </div>
            <p dangerouslySetInnerHTML={{__html:data.price+'元/月'}}></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Item