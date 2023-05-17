import React from "react";
//react-router-dom@6.0版本以后，switch不用了，换成了Routes
import { HashRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";

import BootomNav from "../components/BottomNav";

const AppRouter = ()=>{
  return(
    <Router>
      <BootomNav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/life" element={<LifeService />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  )
}

export default AppRouter