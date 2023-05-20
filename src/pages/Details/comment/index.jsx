import React, { useEffect, useState } from "react";
import CommentView from "../CommentView";
import api from "../../../api";
import LoadMore from '../../../components/LoadMore'

const Comment = (props)=>{
  const [comment,setComment]= useState([])
  const [hasMore,setHasMore] = useState(false)

  useEffect(()=>{
    getCommentHandle()
  },[])

  function loadMoreHandle(){
    getCommentHandle()
  }

  function getCommentHandle(){
    api.comment({id:props.id}).then(res=>{
      const {result,status} = res.data
      if(status===200){
        setComment(comment.concat(result.data))
        setHasMore(result.hasMore)
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  return(
    <div>
      {
        comment.length>0?
        <CommentView data={comment}/>:
        <div>等待数据加载</div>
      }
      {
        hasMore?
        <LoadMore onLoadMore={loadMoreHandle}/>:
        <div>没有数据了</div>
      }
    </div>
  )
}

export default Comment