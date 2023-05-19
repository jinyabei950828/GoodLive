import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {useSelector,useDispatch}from 'react-redux'
import * as searchAction from '../../redux/actions/search'
import { useParams } from "react-router";

import './style.less'

const SearchInput = ()=>{
  const [keywords,setKeywords] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const reduxKeywords = useSelector(state=>state.search)
  const params = useParams()

  function keyUpHandle(e){
    if(keywords.length>0&&e.keyCode===13){
      navigate(`/search/${keywords}`)
      dispatch(searchAction.updateSearch(keywords))
    }
  }

  function changeHandle(e){
    setKeywords(e.target.value)
  }

  //回车
  useEffect(()=>{
    if(params.keywords){
      dispatch(searchAction.updateSearch(params.keywords));
    }else{
      dispatch(searchAction.updateSearch(""))
    }
    setKeywords(reduxKeywords.search);
  },[reduxKeywords.search,params.keywords])

  return(
    <input 
      type="text" 
      className="search-input"
      value={keywords}
      onKeyUp={keyUpHandle}
      onChange={changeHandle}
    />
  )
}

export default SearchInput