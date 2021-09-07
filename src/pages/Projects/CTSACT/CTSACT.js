import React from "react";
import BannerImage from "../../../components/BannerImage/BannerImage";
import { HashLink } from "react-router-hash-link";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { ctsactObj } from "../projectsData";

function CTSACT() {
  return (
    <div className="ctsactPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="Projects"
        alt="Creator's Corner Portfolio Banner"
        title="CENTRE FOR TREATMENT OF SEXUAL ABUSE AND CHILDHOOD TRAUMA"
        desc="January 2021"
      />
      <PortfolioIntro {...ctsactObj} />
      <PortfolioDivider
        text="PROJECT 1: BRANDING & WEBSITE DESIGN"
        bgColour="#0DB1AB"
      />
      <div className="portfolioContainer">
        <img
          className="blockGraphic"
          src="portfolioImages/ctsact/ctsactPalette.png"
          style={{ marginBottom: "3em" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="CTSACT Branding Palette"
        />
        <img
          className="blockGraphic"
          src="portfolioImages/ctsact/websiteTemp.png"
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="CTSACT Website Landing"
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
        <HashLink to="Projects-Interval#top">Previous Client</HashLink>
        <HashLink to="Projects-FOE#top">Next Client</HashLink>
      </div>
      <Footer />
    </div>
  );
}

export default CTSACT;
