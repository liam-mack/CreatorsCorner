import React from "react";
import "./PortfolioIntro.scss";

function PortfolioIntro({
    date,
    servicesList,
    introParagraph,
    testimonial,
    clientName
}) {
  return (
    <div className="portfolioIntro">
      <div className="container">
        <h2 className="portfolioDate">{date}</h2>
        <div className="introRow">
          <div className="introServices" data-aos="fade-right" data-aos-duration="1000">
            <strong>SERVICES:</strong>
            {servicesList.map(function (service, idx) {
                return (
                    <p>{service}</p>
                )
            })}
          </div>
          <p className="introParagraph" data-aos="fade-left" data-aos-duration="1000">
              {introParagraph}
          </p>
        </div>
        <p className="portfolioTestimonial" data-aos="fade-up">
          {testimonial}
        </p>
        <p data-aos="fade-up">{clientName}</p>
      </div>
    </div>
  );
}

export default PortfolioIntro;
