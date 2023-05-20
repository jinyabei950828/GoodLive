import React from "react";
import LoginView from "./LoginView";
import { useDispatch } from "react-redux";
import * as loginActions from '../../redux/actions/login'
import { useNavigate } from "react-router-dom";

const Login = ()=>{
  const dispatch = useDispatch()
  const navigator = useNavigate()

  function loginHandle(user){
    dispatch(loginActions.setLogin(user))
    navigator(-1)
  }

  return (
    <div>
      <LoginView onLoginEvent={loginHandle}/>
    </div>
  )
}

export default Login