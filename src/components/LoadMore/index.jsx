import React, { useEffect,useState,useRef } from "react";
import './style.less'

const LoadMore = (props)=>{
  const more = useRef()
  const [loadTop,setLoadTop] = useState(10000)

  useEffect(()=>{
    let winHeight = document.documentElement.clientHeight
    let timer;
    function scrollHandle(){
      if(more.current){
        setLoadTop(more.current.getBoundingClientRect().top)
        if(timer){
          clearTimeout(timer)
        }else{
          timer = setTimeout(()=>{
            if(winHeight>more.current.getBoundingClientRect().top){
              props.onLoadMore()
            }
          },300)
        }
      }
    }

    window.addEventListener("scroll",scrollHandle)

    return ()=>{
      //window.removeEventListener("scroll",scrollHandle)
      //clearTimeout(timer)
    }
  },[loadTop])

  return(
    <div ref={more} className="load">
      加载更多
    </div>
  )
}

export default LoadMore