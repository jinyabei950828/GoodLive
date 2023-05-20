import React from "react";
import  './style.less'
import Item from "./Item";

const CommentView = (props)=>{
  const data = props.data
  return(
    <div className="comment-list">
      <ul>
        {
          data.map((ele,index)=>{
            return <Item data={ele} key={index}/>
          })
        }
      </ul>
    </div>
  )
}

export default CommentView