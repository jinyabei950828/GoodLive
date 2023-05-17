import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Swiper from "../../components/Swiper";

const Home = ()=>{
  return(
    <div>
      <HeaderNav />
      <Swiper banners={[{},{},{}]}/>
      Home
    </div>
  )
}

export default Home