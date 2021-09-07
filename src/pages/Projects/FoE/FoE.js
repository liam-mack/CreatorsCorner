import React from "react";
import { HashLink } from "react-router-hash-link";
import BannerImage from "../../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { foeObj } from "../projectsData";

function FoE() {
  return (
    <div className="intervalPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="Projects"
        alt="Creator's Corner Portfolio Banner"
        title="FRIENDS OF THE EARTH"
        desc="January 2021"
      />
      <PortfolioIntro {...foeObj} />
      <PortfolioDivider
        text="PROJECT 1: SOCIAL MEDIA TEMPLATES"
        bgColour="#32673D"
      />
      <div className="portfolioContainer">
        <img
          className="blockGraphic"
          src="portfolioImages/foe/foeTemplates.png"
          style={{ marginBottom: "3em" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="Friends of the Earth Posting Templates"
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
        <HashLink to="/Projects-CTSACT#top">Previous Client</HashLink>
        <HashLink to="/Projects-ARC#top">Next Client</HashLink>
      </div>
      <Footer />
    </div>
  );
}

export default FoE;
