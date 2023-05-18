import React from "react";
//react-router-dom@6.0版本以后，switch不用了，换成了Routes
//6.0以后的版本不支持非嵌套路由组件
import { HashRouter as Router,Routes,Route } from "react-router-dom";

import City from "../pages/City";

import Layout from "../pages/Layout";

const AppRouter = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/city" element={<City />} />
        <Route path="/*" element={<Layout />} />   
      </Routes>
    </Router>
  )
}

export default AppRouter