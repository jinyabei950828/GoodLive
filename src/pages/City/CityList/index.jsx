import React from "react";
import "./style.less"

const CityList = (props)=>{

  function handleCity(city){
    props.onEvent(city)
  }

  return(
    <div className="city-list-container">
      <h3>
        热门城市
      </h3>
      <ul className="clear-fix">
        <li onClick={()=>handleCity('北京')}><span>北京</span></li>
        <li onClick={()=>handleCity('上海')}><span>上海</span></li>
        <li onClick={()=>handleCity('深圳')}><span>深圳</span></li>
        <li onClick={()=>handleCity('广州')}><span>广州</span></li>
        <li onClick={()=>handleCity('沈阳')}><span>沈阳</span></li>
        <li onClick={()=>handleCity('天津')}><span>天津</span></li>
        <li onClick={()=>handleCity('杭州')}><span>杭州</span></li>
        <li onClick={()=>handleCity('西安')}><span>西安</span></li>
        <li onClick={()=>handleCity('青岛')}><span>青岛</span></li>
        <li onClick={()=>handleCity('南京')}><span>南京</span></li>
        <li onClick={()=>handleCity('郑州')}><span>郑州</span></li>
        <li onClick={()=>handleCity('成都')}><span>成都</span></li>
        <li onClick={()=>handleCity('赤峰')}><span>赤峰</span></li>
        <li onClick={()=>handleCity('呼和浩特')}><span>呼和浩特</span></li>
        <li onClick={()=>handleCity('次渠')}><span>次渠</span></li>
      </ul>
    </div>
  )
}

export default CityList
