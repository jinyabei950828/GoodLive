import React from "react";
import HeaderNav from "../../../components/HeaderNav";
import Swiper from "../../../components/Swiper";
import Banner1 from "../../../assets/images/banner1.png"
import Banner2 from "../../../assets/images/banner2.png"
import Banner3 from "../../../assets/images/banner3.png"
import HomeHotList from "./HomeHotList";

const Home = ()=>{
  return(
    <div>
      <HeaderNav />
      <Swiper banners={[Banner1,Banner2,Banner3]}/>
      <HomeHotList/>
      Home
    </div>
  )
}

export default Home