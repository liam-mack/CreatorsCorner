import React from "react";
import BannerImage from "../../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import {rainbowObj} from "../projectsData"; 

function Rainbow() {
  return (
    <div className="Rainbowpage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="ProjectsBanner"
        alt="Creator's Corner Portfolio Banner"
        title="CITADEL CANINE SOCIETY"
        desc="October 2020"
      />
      <PortfolioIntro {...rainbowObj}/>
      <PortfolioDivider text="PROJECT 1: WEB DESIGN" bgColour="#EF5E63" />
      <PortfolioDivider text="PROJECT 2: SOCIAL MEDIA DESIGN" bgColour="#EF5E63" />
      <div
        className="buttonWrapper"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Link to="/Apply">
          <Button buttonColour="navyBtn">LET'S WORK TOGETHER</Button>
        </Link>
        <p className="workTogether">
          Get in touch with our team to see how we can use our skills and
          services to help your organization grow!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Rainbow;