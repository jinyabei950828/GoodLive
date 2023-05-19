import React from "react";
import './style.less'
import {Link} from 'react-router-dom'
import SearchInput from "../SearchInput";

const HeaderNav = (props)=>{
  return(
    <div id="home-header" className="class-fix">
      <div className="home-header-left float-left">
        <Link to="/city">
          <span>{props.cityName}</span>
          <i className="icon-angle-down"></i>
        </Link>
      </div>
      <div className="home-header-right float-right">
        <i className="iconfont icon-car"></i>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
          <i className="icon-search"></i>
          <SearchInput />
        </div>
      </div>
    </div>
  )
}

export default  HeaderNav