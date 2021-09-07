import React from "react";
import { HashLink } from "react-router-hash-link";
import BannerImage from "../../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { intervalObj } from "../projectsData";

function Interval() {
  return (
    <div className="intervalPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="Projects"
        alt="Creator's Corner Portfolio Banner"
        title="INTERVAL HOUSE OF OTTAWA"
        desc="January 2021"
      />
      <PortfolioIntro {...intervalObj} />
      <PortfolioDivider
        text="PROJECT 1: BRANDING & SOCIAL MEDIA TEMPLATES"
        bgColour="#71648C"
      />

      <div className="portfolioContainer">
        <img
          className="blockGraphic"
          src="portfolioImages/interval/intervalPalette.png"
          style={{ marginBottom: "3em" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="Interval House Branding Palette"
        />
        <img
          className="blockGraphic"
          src="portfolioImages/interval/intervalTemplates.png"
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="Interval House Marketing Templates"
        />
      </div>
      <PortfolioDivider
        text="PROJECT 2: NEWSLETTER TEMPLATES"
        bgColour="#71648C"
      />
      <div className="portfolioContainer">
        <img
          className="blockGraphic"
          src="portfolioImages/interval/intervalNewsletter.png"
          data-aos="fade-left"
          data-aos-duration="1000"
          alt="Interval House Newsletters"
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
        <HashLink to="/Projects-OCRCC#top">Previous Client</HashLink>
        <HashLink to="/Projects-CTSACT#top">Next Client</HashLink>
      </div>
      <Footer />
    </div>
  );
}

export default Interval;
