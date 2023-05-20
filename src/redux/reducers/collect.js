import { findIndex } from "lodash";
import { COLLECT,UNCOLLECT } from "../constants";

const deafultCollect = []

export default function collect(state=deafultCollect,action){
  switch(action.type){
    case COLLECT:
      return[
        ...state,
        action.collect
      ];
    case UNCOLLECT:
      const currentIndex = findIndex(state,item=>item===action.id)
      return [
        ...state.slice(0,currentIndex),
        ...state.slice(currentIndex+1)
      ]
    default:
      return state
  }
}