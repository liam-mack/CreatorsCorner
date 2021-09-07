import React from "react";
import { HashLink } from "react-router-hash-link";
import BannerImage from "../../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { ocrccObj } from "../projectsData";

function OCRCC() {
  return (
    <div className="ocrccPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="Projects"
        alt="Creator's Corner Portfolio Banner"
        title="ONTARIO COALITION OF RAPE CRISIS CENTRES"
        desc="January 2021"
      />
      <PortfolioIntro {...ocrccObj} />
      <PortfolioDivider
        text="PROJECT: SOCIAL MEDIA TEMPLATES"
        bgColour="#87398B"
      />
      <div className="portfolioContainer">
        <img
          className="blockGraphic"
          src="portfolioImages/ocrcc/ocrccTemplates.png"
          data-aos="fade-left"
          data-aos-duration="1000"
          alt="OCRCC Marketing Templates"
        />
      </div>
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
      <div className="portfolioSlides">
      <HashLink to="/Projects-OCH#top">Previous Client</HashLink>
        <HashLink to="/Projects-Interval#top">Next Client</HashLink>
      </div>
      <Footer />
    </div>
  );
}

export default OCRCC;
