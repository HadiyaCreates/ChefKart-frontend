import React from "react";
import HomeFoot from "./HomeFoot";
import HomeCard from "./HomeCard";
import HomeLow from "./HomeLow";
import GalleryHome from "./GalleryHome";
import HomeTest from "./HomeTest";
import Homeright from "./Homeright";
import HomeMix from "./HomeMix";
import TopCook from "./TopCook";
import AppVideo from "./AppVideo";
import VideoHome from "./VideHome";
import WorkHome from "./WorkHome";
import IndiaPart from "./IndiaPart";
import FoodOption from "./FoodOption";
import BlockHome from "./BlockHome";
import Service from "./Service";
import Front from "./Front";

const Home = () => {
  return (
    <div>
      <Front/>
      <Service/>
      <BlockHome/>
      <WorkHome/>
     <VideoHome/>
      <Homeright />
      <HomeTest />
      
      {/* <LeftHome /> */}
      <FoodOption/>
      <IndiaPart/>
      <GalleryHome />
      <HomeMix />
      <AppVideo />
      <TopCook />
      <HomeLow />
      <HomeCard />
      <HomeFoot />
    </div>
  );
};

export default Home;
