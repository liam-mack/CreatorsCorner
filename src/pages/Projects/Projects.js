import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import PortfolioComponent from "../../components/PortfolioComponent/PortfolioComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import {projectObjOne} from "./ProjectsData"
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer2/Footer";
import Carousel from "../../components/Carousel/Carousel";




function Projects() {
  return (
    <div>
      <ScrollToTopOnMount />
      < Carousel />
      <BannerImage name='hero' banner="ProjectsBanner" alt="Creator's Corner Portfolio Banner" title="OUR PORTFOLIO" desc="Click on one of our clients below to view our work."/>
      <PortfolioComponent {...projectObjOne}/>
      <Footer />
    </div>
  );
}

export default Projects;
