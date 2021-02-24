import React from "react";
import BannerImage from "../../components/BannerImage/BannerImage";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import GridComponent from "../../components/GridComponent/GridComponent";
import FauxList from "../../components/FauxList/FauxList";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";

import { applyObjOne, applyObjTwo, applyObjThree, applyObjFour } from "./ApplyData";
import Footer from "../../components/Footer2/Footer";
import "./Apply.scss"

function Staff() {

  return (
    <div className="applyPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="ApplyBanner"
        alt="Application Page Banner"
        title="APPLY TO WORK WITH US"
      />
      <GridComponent {...applyObjOne}></GridComponent>
      <PrimaryComponent {...applyObjTwo}></PrimaryComponent>
      <PrimaryComponent {...applyObjThree}></PrimaryComponent>
      <FauxList {...applyObjFour}></FauxList>
      <Footer />
    </div>
  );
}

export default Staff;
