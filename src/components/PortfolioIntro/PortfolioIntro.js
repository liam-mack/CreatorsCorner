import React from "react";
import { HashLink } from "react-router-hash-link";
import "./PortfolioIntro.scss";

function PortfolioIntro({
    date,
    clientLogo,
    logoAlt,
    servicesList,
    introParagraph,
    testimonial,
    clientName
}) {
  return (
    <div className="portfolioIntro">
              <HashLink to="/Portfolio#top">
                Back to Portfolio
              </HashLink>
      <div className="portfolioContainer">
        <div className="introRow">
          <img className="organizationLogo" src={clientLogo} alt={logoAlt}/>
          <p className="introParagraph" data-aos="fade-left" data-aos-duration="1000">
              {introParagraph}
          </p>
        </div>
        <div className="introRow">
        <div className="introServices" data-aos="fade-right" data-aos-duration="1000">
            <strong>SERVICES:</strong>
            <ul>
            {servicesList.map(function (service, idx) {
                return (
                    <li>{service}</li>
                )
            })}
            </ul>
          </div>
        
        <p className="portfolioTestimonial" data-aos="fade-up">
          "{testimonial}"
        <p className="clientName"data-aos="fade-up">{clientName} <br></br>{date}</p>
        </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioIntro;
