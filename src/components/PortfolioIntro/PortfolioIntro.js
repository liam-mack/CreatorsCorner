import React from "react";
import "./PortfolioIntro.scss";

function PortfolioIntro() {
  return (
    <div className="portfolioIntro">
      <div className="container">
        <h2 className="portfolioDate">October 2020</h2>
        <div className="introRow">
          <div className="introServices" data-aos="fade-right" data-aos-duration="1000">
            <strong>SERVICES:</strong>
            <p>Branding Design</p>
            <p>SM posts</p>
            <p>Web Design</p>
            <p>SM Calendar</p>
            <p>Fundraising Ideas</p>
          </div>
          <p className="introParagraph" data-aos="fade-left" data-aos-duration="1000">
            We started working with Citadel Canine in October 2020, while their
            organization was severely suffering from COVID-19 ramifications.
            Their mission is to help public workers (firefighters, nurses,
            veterans, etc.) suffering from PTSD by providing them support dogs
            at no charge. Unfortunately, COVID-19 had d rastic effects on their
            organization. They lost 70% of their team and were facing extreme
            lows in funds and donations. We helped them with many services,
            including a logo, website, marketing plan, social media posts,
            fundraising ideas, a calendar and more
          </p>
        </div>
        <p className="portfolioTestimonial" data-aos="fade-up">
          "Creator's Corner was truly a gift to us. We had not even raised a
          fraction of the money we needed to operate, and we had a long to-do
          list that had no end in sight. Being able to work with CC gave us the
          power to focus on the important things and put our best foot forward
          in 2021."
        </p>
        <p data-aos="fade-up">-CITADEL CANINE SOCIETY</p>
      </div>
    </div>
  );
}

export default PortfolioIntro;
