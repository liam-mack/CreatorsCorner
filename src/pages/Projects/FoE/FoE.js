import React from "react";
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
        title="Friends of the Earth"
        desc="January 2021"
      />
      <PortfolioIntro {...foeObj} />
      <PortfolioDivider text="PROJECT 1: LOGO DESIGN" bgColour="#2EC4E9" />
     
      <PortfolioDivider
        text="PROJECT 2: GRAPHIC DESIGN - BANNER & FLYERS"
        bgColour="#2EC4E9"
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
      <Footer />
    </div>
  );
}

export default FoE;
