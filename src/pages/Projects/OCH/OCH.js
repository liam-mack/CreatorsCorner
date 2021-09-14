import React from "react";
import { HashLink } from "react-router-hash-link";
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
        banner="Projects"
        alt="Creator's Corner Portfolio Banner"
        title="OPERATION COME HOME"
        desc="January 2021"
      />
      <PortfolioIntro {...ochObj} />
      <PortfolioDivider text="PROJECT 1: LOGO DESIGN" bgColour="#2EC4E9" />
      <div className="portfolioContainerNarrow">
        <p className="portfolioHeader">Logo Proposals</p>
        <div className="multiLogoWrapper">
          <img
            className="quarterImg"
            src="portfolioImages/och/conceptLogo1.png"
            alt="OCH Concept Logo 1"
          />
          <img
            className="rectangleImg quarterImg"
            src="portfolioImages/och/conceptLogo3.png"
            alt="OCH Concept Logo 3"
          />
          <img
            className="rectangleImg quarterImg"
            src="portfolioImages/och/conceptLogo5.png"
            alt="OCH Concept Logo 5"
          />
          <img
            className="quarterImg"
            src="portfolioImages/och/conceptLogo4.png"
            alt="OCH Concept Logo 4"
          />
        </div>
        <div className="multiLogoWrapper">
          <img
            className="quarterImg ochLogoConcept"
            src="portfolioImages/och/conceptLogo6.png"
            alt="OCH Concept Logo 6"
          />
          <img
            className="quarterImg ochLogoConcept"
            src="portfolioImages/och/conceptLogo2.png"
            alt="OCH Concept Logo 2"
          />
          <img
            className="rectangleImg halfImg "
            src="portfolioImages/och/conceptLogo7.png"
            alt="OCH Concept Logo 7"
          />
        </div>
        <p className="portfolioHeader">Chosen Logo</p>
        <img
          className="finalLogo"
          src="portfolioImages/och/finalLogo.png"
          alt="OCH Final Logo"
        />
      </div>
      <PortfolioDivider
        text="PROJECT 2: GRAPHIC DESIGN - BANNER & FLYERS"
        bgColour="#2EC4E9"
      />
      <div className="portfolioContainerNarrow">
        <p className="portfolioHeader">Banner Designs</p>
        <div className="multiImgWrapper">
          <img
            className="halfImg"
            src="portfolioImages/och/banner4.png"
            alt="OCH Banner Template 4"
          />
          <img
            className="halfImg"
            src="portfolioImages/och/banner3.png"
            alt="OCH Banner Template 3"
          />
        </div>
        <div className="multiImgWrapper">
          <img
            className="halfImg"
            src="portfolioImages/och/banner2.png"
            alt="OCH Banner Template 2"
          />
          <img
            className="halfImg"
            src="portfolioImages/och/banner1.png"
            alt="OCH Banner Template 1"
          />
        </div>
        <p className="portfolioHeader">Flyer Designs</p>
        <div className="multiImgWrapper">
          <img
            className="thirdImg"
            src="portfolioImages/och/flyer3.png"
            alt="OCH Flyer Template 3"
          />
          <img
            className="thirdImg"
            src="portfolioImages/och/flyer4.png"
            alt="OCH Flyer Template 4"
          />
          <img
            className="thirdImg"
            src="portfolioImages/och/flyer1.png"
            alt="OCH Flyer Template 1"
          />
        </div>
        <div className="multiImgWrapper center">
          <img
            className="thirdImg"
            src="portfolioImages/och/flyer2.png"
            alt="OCH Flyer Template 2"
          />
          <img
            className="thirdImg"
            src="portfolioImages/och/flyer5.png"
            alt="OCH Flyer Template 5"
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
        <HashLink to="/Projects-Rainbow#top">Previous Client</HashLink>
        <HashLink to="/Projects-OCRCC#top">Next Client</HashLink>
      </div>
      <Footer />
    </div>
  );
}

export default OCH;
