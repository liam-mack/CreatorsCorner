import React from "react";
import BannerImage from "../../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { ochObj } from "../projectsData";

function OCH() {
  return (
    <div className="ochPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="ProjectsBanner"
        alt="Creator's Corner Portfolio Banner"
        title="OPERATION COME HOME"
        desc="January 2021"
      />
      <PortfolioIntro {...ochObj} />
      <PortfolioDivider text="PROJECT 1: LOGO DESIGN" bgColour="#2EC4E9" />
      <div className="container">
        <p className="portfolioHeader">Concepts:</p>
        <div className="multiImgWrapper">
          <img
            className="quarterImg"
            src="portfolioImages/och/conceptLogo1.png"
          />
          <img
            className="quarterImg rectangleImg"
            src="portfolioImages/och/conceptLogo3.png"
          />
          <img
            className="quarterImg rectangleImg"
            src="portfolioImages/och/conceptLogo5.png"
          />
          <img
            className="quarterImg"
            src="portfolioImages/och/conceptLogo4.png"
          />
        </div>
        <div className="multiImgWrapper">
          <img
            className="quarterImg ochLogoConcept"
            src="portfolioImages/och/conceptLogo6.png"
          />
          <img
            className="quarterImg ochLogoConcept"
            src="portfolioImages/och/conceptLogo2.png"
          />
          <img className="halfImg rectangleImg" src="portfolioImages/och/conceptLogo7.png" />
        </div>
        <p className="portfolioHeader">Final Logo:</p>
        <img className="finalLogo" src="portfolioImages/och/finalLogo.png" />
      </div>
      <PortfolioDivider
        text="PROJECT 2: GRAPHIC DESIGN - BANNER & FLYERS"
        bgColour="#2EC4E9"
      />
      <div className="container">
        <p className="portfolioHeader">Banner designs:</p>
        <div className="multiImgWrapper">
          <img className="halfImg" src="portfolioImages/och/banner4.png" />
          <img className="halfImg" src="portfolioImages/och/banner3.png" />
        </div>
        <div className="multiImgWrapper">
          <img className="halfImg" src="portfolioImages/och/banner2.png" />
          <img className="halfImg" src="portfolioImages/och/banner1.png" />
        </div>
        <p className="portfolioHeader">Flyer designs:</p>
        <div className="multiImgWrapper">
          <img className="thirdImg" src="portfolioImages/och/flyer3.png"/>
          <img className="thirdImg" src="portfolioImages/och/flyer4.png"/>
          <img className="thirdImg" src="portfolioImages/och/flyer1.png"/>
        </div>
        <div className="multiImgWrapper center">
          <img className="thirdImg" src="portfolioImages/och/flyer2.png"/>
          <img className="thirdImg" src="portfolioImages/och/flyer5.png"/>
        </div>
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
      <Footer />
    </div>
  );
}

export default OCH;
