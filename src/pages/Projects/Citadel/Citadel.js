import React from "react";
import { HashLink } from "react-router-hash-link";
import BannerImage from "../../../components/BannerImage/BannerImage";
import ScrollToTopOnMount from "../../../components/ScrollToTopOnMount/ScrollToTopOnMount";
import Footer from "../../../components/Footer2/Footer";
import PortfolioIntro from "../../../components/PortfolioIntro/PortfolioIntro";
import PortfolioDivider from "../../../components/PortfolioDivider/PortfolioDivider";
import { Button } from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { citadelObj } from "../projectsData";
import "../Projects.scss";

function Citadel() {
  return (
    <div className="citadelPage">
      <ScrollToTopOnMount />
      <BannerImage
        name="hero"
        banner="Projects"
        alt="Creator's Corner Portfolio Banner"
        title="CITADEL CANINE SOCIETY"
        desc="October 2020"
      />
      <PortfolioIntro {...citadelObj} />
      <PortfolioDivider text="PROJECT 1: LOGO REDESIGN" bgColour="#233976" />
      <div className="portfolioContainerNarrow">
        <p className="portfolioHeader">Their original logo:</p>
        <img
          className="citadelLogo"
          src="/portfolioImages/citadel/originalLogo.png"
          data-aos="fade-right"
          data-aos-duration="1000"
          alt="Citadel Canine Original Logo"
        />
        <p className="portfolioHeader">Our proposals:</p>
        <img
          className="logoProposals"
          src="/portfolioImages/citadel/logoGraphics.png"
          data-aos="fade-left"
          data-aos-duration="1000"
          alt="Citadel Canine Logo Proposals"
        />
      </div>
      <PortfolioDivider text="PROJECT 2: GRAPHIC DESIGN" bgColour="#233976" />
      <div className="portfolioContainerNarrow">
        <img
          src="/portfolioImages/citadel/bannerGraphic.png"
          alt="Citadel Canine Boots4Pups Banner"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <div className="multiImgWrapper">
          <img
            className="halfImg"
            src="/portfolioImages/citadel/testimonialsGraphic.png"
            data-aos="fade-right"
            data-aos-duration="1000"
            alt="Citadel Canine Testimonials Template"
          />
          <img
            className="halfImg"
            src="/portfolioImages/citadel/donateGraphic.png"
            data-aos="fade-right"
            data-aos-duration="1000"
            alt="Citadel Canine Donation Template"
          />
        </div>
        <img
          src="/portfolioImages/citadel/volunteerGraphic.png"
          alt="Citadel Canine Volunteer Graphic"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <div className="multiImgWrapperSquare">
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/tshirtFront2.png"
            data-aos="flip-left"
            data-aos-duration="1000"
            alt="Citadel Canine T-Shirt Design Front Alternate"
          />
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/tshirtBack.png"
            data-aos="flip-left"
            data-aos-duration="1500"
            alt="Citadel Canine T-Shirt Design Back"
          />
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/tshirtFront1.png"
            data-aos="flip-left"
            data-aos-duration="2000"
            alt="Citadel Canine T-Shirt Design Front"
          />
        </div>
        <img
          src="portfolioImages/citadel/facebookCover.png"
          alt="Citadel Canine Facebook Banner"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <div className="multiImgWrapper">
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/igInfo.png"
            data-aos="fade-right"
            data-aos-duration="1000"
            alt="Citadel PTSD Infographic"
          />
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/igEvent.png"
            data-aos="fade-right"
            data-aos-duration="1500"
            alt="Citadel Event Template"
          />
          <img
            className="thirdImg"
            src="/portfolioImages/citadel/igFundraise.png"
            data-aos="fade-right"
            data-aos-duration="2000"
            alt="Citadel Don"
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
      <div className="portfolioSlides">
        <HashLink />
        <HashLink to="Projects-Rainbow#top">Next Client</HashLink>
      </div>
      <Footer />
    </div>
  );
}

export default Citadel;
