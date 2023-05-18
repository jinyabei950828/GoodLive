import React from "react"
import { Routes,Route } from "react-router-dom";

import Home from "../pages/Main/Home";
import LifeService from "../pages/Main/LifeService";
import Shop from "../pages/Main/Shop";
import User from "../pages/Main/User";
import BootomNav from "../components/BottomNav";

const Layout = (props)=>{
  console.log(props)
  return(
    <div>
      <BootomNav />
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/life" element={<LifeService />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  )
}

export default Layout