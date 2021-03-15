import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import PortfolioGrid from "../../components/PortfolioGrid/PortfolioGrid";
import BannerImage from "../../components/BannerImage/BannerImage";
import {projectObjOne} from "./PortfolioData"
import Footer from "../../components/Footer2/Footer";
import Carousel from "../../components/Carousel/Carousel";




function Portfolio() {
  return (
    <div>
      < Carousel />
      <BannerImage name='hero' banner="Portfolio" alt="Creator's Corner Portfolio Banner" title="OUR PORTFOLIO" desc="Click on one of our clients below to view our work."/>
      <PortfolioGrid {...projectObjOne}/>
      <Footer />
    </div>
  );
}

export default Portfolio;
