import React from "react";
import BannerImage from "../../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
import { rainbowObj } from "../projectsData";

function Rainbow() {
  return (
    <div className="Rainbowpage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="Projects"
        alt="Creator's Corner Portfolio Banner"
        title="RAINBOW KIDSCHOOL"
        desc="November 2020"
      />
      <PortfolioIntro {...rainbowObj} />
      <PortfolioDivider
        text="PROJECT 1: GRAPHIC DESIGN & SOCIAL MEDIA TEMPLATES"
        bgColour="#EF5E63"
      />

      <div className="portfolioContainer">
        <img
          className="blockGraphic"
          src="portfolioImages/rainbow/rainbowSM.png"
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="Rainbow Kidschool Social Media Templates"
        />
      </div>
      <PortfolioDivider
        text="PROJECT 2: WEBSITE DESIGN & CREATION"
        bgColour="#EF5E63"
      />
      <div className="portfolioContainer">
        <img
          className="blockGraphic"
          src="portfolioImages/rainbow/rainbowSite.png"
          data-aos="fade-left"
          data-aos-duration="1000"
          alt="Rainbow Kidschool Custom Website"
        />
      </div>

      <div
        className="buttonWrapper"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <HashLink to="/Apply#top">
          <Button buttonColour="navyBtn">LET'S WORK TOGETHER</Button>
        </HashLink>
        <p className="workTogether">
          Get in touch with our team to see how we can use our skills and
          services to help your organization grow!
        </p>
      </div>
      <div className="portfolioSlides">
        <HashLink to="/Projects-Citadel#top">Previous Client</HashLink>
        <HashLink to="/Projects-OCH#top">Next Client</HashLink>
      </div>
      <Footer />
    </div>
  );
}

export default Rainbow;
