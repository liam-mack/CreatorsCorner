import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./Footer.scss";

function Footer({hasApplication}) {
  // const hasApplication = application;

  return (
    <div className="footerContainer">
    {hasApplication && <div class="" id="openCharter"><div class="container"><h1 class="top-line">OPEN A CHAPTER AT YOUR SCHOOL</h1><div class="row primary__hero-row"><div class="col"><div class="primary__hero-text-wrapper"><p class="primary__hero-body aos-init aos-animate" data-aos="fade-down">Are you passionate about our mission? Are you interested in opening a Creator's Corner chapter at your school? We believe we can have an even bigger impact if we work together across the nation. Get in touch with our founder to get started!</p><p class="primary__hero-body aos-init aos-animate" data-aos="fade-down"></p><p class="primary__hero-body aos-init aos-animate" data-aos="fade-down"></p><p class="primary__hero-body aos-init aos-animate" data-aos="fade-down"></p><p class="primary__hero-body aos-init aos-animate" data-aos="fade-down"></p></div></div></div><div class="buttonWrapper"><a href="/Contact#top"><button class="btn btn--primary btn--medium navyBtn undefined">Contact</button></a></div></div></div>}
      <div className="footerLinks">
        <div className="footer-link-wrapper">
          <div className="footer-link-items socials">
            <div className="footer-img-row">
              <img
                className="footer-logo-img"
                src="/images/cusaClubsFooter.png"
                alt=""
              ></img>
              <img
                className="footer-logo-img"
                src="/images/carletonFooter.png"
                alt=""
              ></img>
              <img
                className="footer-logo-img"
                src="/images/creatorsCornerFooter.png"
                alt=""
              ></img>
            </div>
            <div className="footer-row">
              <img
                className="footer-mail"
                alt=""
                src="/images/footerMail.png"
              ></img>
              <button className="footer-email">
                creatorscornercu@gmail.com
              </button>
            </div>
            <div className="footer-row">
              <a
                href="https://www.instagram.com/creatorscornercu/"
                className="footer-socials"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer-socials-img"
                  src="images/footerIG.png"
                  alt=""
                ></img>
              </a>
              <a
                href="https://www.facebook.com/CreatorsCornerCU/"
                className="footer-socials"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer-socials-img"
                  src="images/footerFB.png"
                  alt=""
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/company/creatorscornercu/"
                className="footer-socials"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer-socials-img"
                  src="images/letterLinkedIn.png"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <div className="footerHeaderWrapper">
            <NavHashLink
              className="footerNav"
              smooth
              to="/#Home"
              exact={true}
              activeClassName="selectedNav"
            >
              <h2>Home</h2>
            </NavHashLink>
            </div>
            <HashLink className="subFooter" smooth to="/Home#top">
              What We Do
            </HashLink>
            <HashLink className="subFooter" smooth to="/Home#services">
              Our Services
            </HashLink>
            <HashLink className="subFooter" smooth to="/Home#apply">
              Apply
            </HashLink>
            <HashLink className="subFooter" smooth to="/Home#follow">
              Follow Our Mission
            </HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
          <div className="footerHeaderWrapper">
            <NavHashLink
              className="footerNav"
              smooth
              to="/About#top"
              activeClassName="selectedNav"
            >
              <h2>About</h2>
            </NavHashLink>
            </div>
            <HashLink className="subFooter" smooth to="/About#us">
              Who Are We?
            </HashLink>
            <HashLink className="subFooter" smooth to="/About#mission">
              Our Mission
            </HashLink>
            <HashLink className="subFooter" smooth to="/About#values">
              Our Values
            </HashLink>
            <HashLink className="subFooter" smooth to="/About#team">
              Our Team
            </HashLink>
            <HashLink className="subFooter" smooth to="/About#letter">
              Letter from our Founder
            </HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
          <div className="footerHeaderWrapper">
            <NavHashLink
              className="footerNav"
              smooth
              to="/Portfolio#top"
              activeClassName="selectedNav"
            >
              <h2>Portfolio</h2>
            </NavHashLink>
            </div>
            <HashLink className="subFooter" smooth to="/Portfolio#highlights">
              Highlights
            </HashLink>
            <HashLink className="subFooter" smooth to="/Portfolio#portfolio">
              Portfolio
            </HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
          <div className="footerHeaderWrapper">
            <NavHashLink
              className="footerNav"
              smooth
              to="/Apply#top"
              activeClassName="selectedNav"
            >
              <h2>Apply</h2>
            </NavHashLink>
            </div>
            <HashLink className="subFooter" smooth to="/Apply#Apply">
              Apply
            </HashLink>
            <HashLink className="subFooter" smooth to="/Apply#FAQ">
              FAQ
            </HashLink>
            <HashLink className="subFooter" smooth to="/Apply#commitment">
              What It Takes
            </HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
          <div className="footerHeaderWrapper">
            <NavHashLink
              className="footerNav"
              smooth
              to="/Events#top"
              activeClassName="selectedNav"
            >
              <h2>Events</h2>
            </NavHashLink>
            </div>
            <HashLink className="subFooter" smooth to="/Events#upcoming">
              Upcoming Events
            </HashLink>
            <HashLink className="subFooter" smooth to="/Events#speakers">
              Past Speakers
            </HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
          <div className="footerHeaderWrapper">
            <NavHashLink
              className="footerNav"
              smooth
              to="/Contact#top"
              activeClassName="selectedNav"
            >
              <h2>Contact</h2>
            </NavHashLink>
            </div>
            <HashLink className="subFooter" smooth to="/Contact#contact-form">
              Send us a Message
            </HashLink>
            <HashLink className="subFooter" smooth to="/Contact#follow">
              Follow our Mission
            </HashLink>
          </div>
        </div>
      </div>
      <section className="copyright">
        <p className="copyright-wrapper">
          Copyright &copy; 2021 CREATORS CORNER. All Rights Reserved.
        </p>
      </section>
    </div>
  );
}

export default Footer;
