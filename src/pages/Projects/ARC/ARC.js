import React from "react";
import { HashLink } from "react-router-hash-link";
import BannerImage from "../../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { arcObj } from "../projectsData";

function ARC() {
  return (
    <div className="arcPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="Projects"
        alt="Creator's Corner Portfolio Banner"
        title="AMAZON RAINFOREST CONSERVANCY"
        desc="January 2021"
      />
      <PortfolioIntro {...arcObj} />
      <PortfolioDivider
        text="PROJECT 1: LOGO & BRANDING REDESIGN"
        bgColour="#5D4834"
      />
      <div className="portfolioContainer">
        <p className="portfolioHeader">Their Logos</p>
        <img
          className="blockGraphic"
          src="portfolioImages/arc/arcOldLogos.png"
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="Rainbow Kidschool Social Media Templates"
          style={{ marginBottom: "5em" }}
        />
        <p className="portfolioHeader">Our Proposals</p>

        <img
          className="blockGraphic"
          src="portfolioImages/arc/arcPalette.png"
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="Rainbow Kidschool Social Media Templates"
          style={{ marginBottom: "5em" }}
        />
        <img
          className="blockGraphic"
          src="portfolioImages/arc/arcNewLogos.png"
          data-aos="fade-up"
          data-aos-duration="1000"
          alt="Rainbow Kidschool Social Media Templates"
          style={{ marginBottom: "5em" }}
        />
      </div>

      <PortfolioDivider text="PROJECT 2: WEBSITE DESIGN" bgColour="#5D4834" />
      <img
        className="blockGraphic"
        src="portfolioImages/arc/arcWebsite.png"
        data-aos="fade-left"
        data-aos-duration="1000"
        alt="Amazon Rainforest Conservancy Website"
      />

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
        <HashLink to="/Projects-FOE">Previous Client</HashLink>
      </div>
      <Footer />
    </div>
  );
}

export default ARC;
