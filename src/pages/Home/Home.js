import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import GridComponent from "../../components/GridComponent/GridComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import Footer from "../../components/Footer2/Footer";
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, } from "./HomeData";
import "./Home.scss";


function Home() {
  return (
    <div className="homePage">
      <BannerImage name='hero' banner="Home" alt="Creator's Corner Home Page Banner" title="Creator's Corner" desc='Designing a Difference'/>
      <PrimaryComponent {...homeObjOne} />
      <GridComponent {...homeObjTwo} />
      <GridComponent {...homeObjThree} />
      <PrimaryComponent {...homeObjFour} />
      <Footer />
    </div>
  );
}

export default Home;
