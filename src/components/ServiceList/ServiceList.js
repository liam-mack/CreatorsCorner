import React from "react";
import "./ServiceList.scss";

function ServiceList() {
  return (
    <div className="servicesHome">
      <h1>OUR PRO-BONO SERVICES</h1>
      <div className="servicesRow">
        <div className="serviceBox">
          <div className="serviceBodyWrapper">
            <img className="servicesIcon" src="/images/iconDesign.png" alt="" />
            <ul className="servicesList">
              <h2>Design</h2>
              <li>Web Design</li>
              <li>App Design</li>
              <li>Logos & Branding</li>
              <li>Graphic Design</li>
              <li>Merchandise/Swag</li>
            </ul>
          </div>
        </div>
        <div className="serviceBox">
          <div className="serviceBodyWrapper">
            <img
              className="servicesIcon"
              src="/images/iconMarketing.png"
              alt=""
            />
            <ul className="servicesList">
              <h2>Marketing</h2>
              <li>Marketing Strategies</li>
              <li>Social Media Calendars</li>
              <li>Social Media Guides</li>
              <li>Fundraising Plans</li>
            </ul>
          </div>
        </div>
        <div className="serviceBox">
          <div className="serviceBodyWrapper">
            <img className="servicesIcon" src="/images/iconTech.png" alt="" />
            <ul className="servicesList">
              <h2>Development</h2>
              <li>App creation</li>
              <li>Tech needs</li>
              <li>Web building</li>
              <li>QA Fixes & Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
