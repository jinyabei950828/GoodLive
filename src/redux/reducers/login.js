import { SET_LOGIN,OUT_LOGIN } from "../constants";

const defaultState = {
  user:{
    token:'',
    nick:''
  }
}

export default function Login(state=defaultState,action){
  switch(action.type){
    case SET_LOGIN:
      return{
        user:action.user
      };
    case OUT_LOGIN:
      return{
        user:{
          token:'',
          nick:''
        }
      };
    default:
      return state
  }
}