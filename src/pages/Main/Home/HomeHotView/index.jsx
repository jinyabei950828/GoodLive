import React from "react";
import './style.less'

const HomeHotView  = (props)=>{
  return(
    <div className="hotproduct">
      <h3>{props.title}</h3>
      <div className="hot-container">
        <ul className="clear-fix">
          {
            props.data.map((item,index)=>{
              return(
                <li key={index}>
                  <a href={item.link}>
                    <img src={item.img} alt="" />
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default HomeHotView