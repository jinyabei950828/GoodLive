import React from "react";
import './style.less'

import SearchInput from "../../../components/SearchInput";
import { useNavigate } from "react-router";

const SearchHeader = ()=>{
  const navigate = useNavigate()

  function backHandle(){
    navigate(-1)
  }
  return(
    <div id="search-header" className="clear-fix"> 
      <span className="back-icon float-left" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <div className="input-container">
        <i className="icon-search"></i>
        <SearchInput />
      </div>
    </div>
  )
}

export default SearchHeader