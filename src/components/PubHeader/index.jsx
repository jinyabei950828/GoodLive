import React from "react";
import "./style.less"
import {useNavigate} from 'react-router-dom'

const PubHeader = ()=>{

  const navigate = useNavigate()

  function backHandle(){
    navigate(-1)
  }

  return(
    <div id="common-header">
      <span className="back-icon" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>城市选择</h1>
    </div>
  )
}

export default PubHeader