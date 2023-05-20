import React from "react";
//react-router-dom@6.0版本以后，switch不用了，换成了Routes
//6.0以后的版本不支持非嵌套路由组件
import { HashRouter as Router,Routes,Route } from "react-router-dom";

import City from "../pages/City";
import Search from "../pages/Search";
import Details from "../pages/Details";
import Login from "../pages/Login";

import Layout from "../pages/Layout";

const AppRouter = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/city" element={<City />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:keywords" element={<Search />} />
        <Route path="/*" element={<Layout />} />   
      </Routes>
    </Router>
  )
}

export default AppRouter