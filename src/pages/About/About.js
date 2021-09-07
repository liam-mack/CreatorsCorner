import React from "react";
import PrimaryComponent from "../../components/PrimaryComponent/PrimaryComponent";
import BannerImage from "../../components/BannerImage/BannerImage";
import {
  aboutObjOne,
  aboutObjTwo,
  aboutObjThree,
  aboutObjFour,
  aboutObjFive,
  aboutObjSix,
  aboutObjSeven,
  aboutObjEight,
} from "./AboutData";
import StaffDirectory from "../../components/StaffDirectory/StaffDirectory";
import exec from "../../teamdb/execdb.json";
import design from "../../teamdb/designdb.json";
import develop from "../../teamdb/developdb.json";
import marketing from "../../teamdb/marketingdb.json";
import Footer from "../../components/Footer2/Footer";
import "./About.scss";

function About() {
  return (
    <div className="aboutPage">
      <BannerImage
        name="hero"
        banner="About"
        alt="About Us Page Banner"
        title="ABOUT US"
        desc="We offer NPO's all things creative, pro-bono"
      />
      <PrimaryComponent {...aboutObjOne} />
      <PrimaryComponent {...aboutObjTwo} />
      <PrimaryComponent {...aboutObjThree} />
      <div className="staffDirectoryWrapper">
        <PrimaryComponent {...aboutObjFour} />
        <StaffDirectory staff={exec} />
      </div>
      <div className="staffDirectoryWrapper">
        <PrimaryComponent {...aboutObjFive} />
        <StaffDirectory staff={design} />
      </div>
      <div className="staffDirectoryWrapper">
        <PrimaryComponent {...aboutObjSeven} />
        <StaffDirectory staff={marketing} />
      </div>
      <div className="staffDirectoryWrapper">
        <PrimaryComponent {...aboutObjSix} />
        <StaffDirectory staff={develop} />
      </div>
      <PrimaryComponent {...aboutObjEight} />
      <Footer />
    </div>
  );
}

export default About;
