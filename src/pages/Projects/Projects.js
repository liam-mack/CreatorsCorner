import React from "react";
import BannerImage from "../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../components/Footer2/Footer";
import PortfolioIntro from "../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projectsPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="ProjectsBanner"
        alt="Creator's Corner Portfolio Banner"
        title="CITADEL CANINE SOCIETY"
        desc="October 2020"
      />
      <PortfolioIntro />
      <PortfolioDivider text="PROJECT 1: LOGO REDESIGN" bgColour="#233976" />
      <div className="container">
        <p>Their original logo:</p>
        <img
          className="citadelLogo"
          src="/portfolioImages/citadel/originalLogo.png"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <p>Our proposals:</p>
        <img
          className="logoProposals"
          src="/portfolioImages/citadel/logoGraphics.png"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </div>
      <PortfolioDivider text="PROJECT 2: GRAPHIC DESIGN" bgColour="#233976" />
      <div className="container">
        <img src="/portfolioImages/citadel/bannerGraphic.png" data-aos="fade-left" data-aos-duration="1000"/>
        <div className="multiImgWrapper">
          <img
            className="halfImg"
            src="/portfolioImages/citadel/testimonialsGraphic.png"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <img
            className="halfImg"
            src="/portfolioImages/citadel/donateGraphic.png"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <img src="/portfolioImages/citadel/volunteerGraphic.png" data-aos="fade-left" data-aos-duration="1000"/>
        <div className="multiImgWrapper">
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/tshirtFront2.png"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/tshirtBack.png"
            data-aos="flip-left"
            data-aos-duration="1500"
          />
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/tshirtFront1.png"
            data-aos="flip-left"
            data-aos-duration="2000"
          />
        </div>
        <img src="portfolioImages/citadel/facebookCover.png" data-aos="fade-left" data-aos-duration="1000"/>
        <div className="multiImgWrapper">
          <img className="thirdImg" 
          src="/portfolioImages/citadel/igInfo.png"
          data-aos="fade-right"
          data-aos-duration="1000" 
          />
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/igEvent.png"
            data-aos="fade-right"
            data-aos-duration="1500" 
            
          />
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/igFundraise.png"
            data-aos="fade-right"
            data-aos-duration="2000" 
          />
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

export default Projects;
