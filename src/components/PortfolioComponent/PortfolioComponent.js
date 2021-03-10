import React from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./PortfolioComponent.scss";

function PortfolioComponent({
  rows,
  img,
  alt,
  portfolioTitle,
  portfolioDate,
  buttonLabel,
  buttonColour,
  buttonLink,
  sectionId,
}) {
  return (
    <div className="portfolioComponent" id={sectionId}>
      <div className="container">
        {rows.map(function (rowNumber, idx) {
          return (
            <div className="gridRow portfolioRow">
              <div className="gridColumn portfolioColumn" data-aos="fade-right" data-aos-duration="1500">
                <div className="portfolio-item-wrapper">
                  <img
                    src={img[rowNumber]}
                    alt={alt[rowNumber]}
                    className="portfolio-item-image"
                  />
                  <div className="portfolio-item-overlay">
                    <h2 className="portfolio-item-title">
                      {portfolioTitle[rowNumber]}
                    </h2>
                    <h3 className="portfolio-item-date">
                      {portfolioDate[rowNumber]}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="gridColumn portfolioColumn" data-aos="fade-left" data-aos-duration="1500">
                <div className="portfolio-item-wrapper">
                  <img
                    src={img[rowNumber + 1]}
                    alt={alt[rowNumber + 1]}
                    className="portfolio-item-image"
                  />
                  <div className="portfolio-item-overlay">
                    <h2 className="portfolio-item-title">
                      {portfolioTitle[rowNumber + 1]}
                    </h2>
                    <h3 className="portfolio-item-date">
                      {portfolioDate[rowNumber + 1]}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* {buttonLink && ( */}
        <div className="buttonWrapper" data-aos="flip-left" data-aos-duration="1500">
          <Link to={buttonLink}>
            <Button buttonColour={buttonColour}>{buttonLabel}</Button>
          </Link>
          <p className="workTogether">
            Get in touch with our team to see how we can use our skills and
            services to help your organization grow!
          </p>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default PortfolioComponent;
