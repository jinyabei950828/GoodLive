import React,{useEffect, useState} from "react";
import './style.less'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as collectActionS from '../../../redux/actions/collect'


const BuyAndStoreView = (props)=>{
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isCollect,setIsCollect] = useState(false)

  //初始化操作
  useEffect(()=>{
    setIsCollect(isStore())
  },[])

  function storeHandle(){
    if(props.user.token){
      if(isStore()){//已收藏
        setIsCollect(true)
        dispatch(collectActionS.removeCollect(props.id))
      }else{
        setIsCollect(false)
        dispatch(collectActionS.setCollect(props.id))
      }
    }else{
      navigate('/login')
    }
  }

  function isStore(){
    let collects =props.collects
    let id = props.id
    return collects.some(item=>{
      return item ===id
    })
  }

  return(
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {
          !isCollect?
          <button className="selected o" onClick={storeHandle}>已收藏</button>:
          <button className="selected" onClick={storeHandle}>收藏</button>
        }
      </div>
      <div className="item-container float-right">
        <button className="selected">购买</button>
      </div>
    </div>
  )
}

export default BuyAndStoreView