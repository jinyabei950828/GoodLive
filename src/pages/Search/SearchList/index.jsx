import React,{useEffect, useState} from "react";
import api from "../../../api";

import SearchListView from "../SearchListView";
import LoadMore from "../../../components/LoadMore";

const SearchList = (props)=>{
  const [searchData,setSearchData]= useState([])
  const [hasMore,setHasMore] = useState(false)

  function getSearchData(){
    api.search({
      search:props.keywords
    }).then(res=>{
      const {status,result} = res.data
      if(status===200){
        setSearchData(searchData.concat(result.data))
        setHasMore(result.hasMore)
      }
    }).catch(error=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getSearchData()
  },[props.search])

  function loadMoreHandle(){
    getSearchData()
  }

  return(
    <div>
      {
        searchData.length>0?
        <SearchListView search={searchData}/>:
        <div>等待数据加载...</div>
      }
      {
        hasMore?
        <LoadMore onLoadMore={loadMoreHandle}/>:
        <div>被你看完了</div>
      }
    </div>
  )
}

export default SearchList