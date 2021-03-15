import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="portfolioContainer">
        <div className="footerLinks">
          <div className="footer-link-wrapper">
            <div className="footer-link-items socials">
              <img
                className="footer-logo-img"
                src="/images/ccLogoFooter.png"
              ></img>
              <div className="footer-row">
                <img className="footer-mail" src="/images/footerMail.png"></img>
                <a className="footer-email">creatorscornercu@gmail.com</a>
              </div>
              <div className="footer-row">
                <a
                  href="https://www.instagram.com/creatorscornercu/"
                  className="footer-socials"
                  target="_blank"
                >
                  <img
                    className="footer-socials-img"
                    src="images/footerIG.png"
                  ></img>
                </a>
                <a
                  href="https://www.facebook.com/CreatorsCornerCU/"
                  className="footer-socials"
                  target="_blank"
                >
                  <img
                    className="footer-socials-img"
                    src="images/footerFB.png"
                  ></img>
                </a>
                <a
                  href="https://www.linkedin.com/company/creatorscornercu/"
                  className="footer-socials"
                  target="_blank"
                >
                  <img
                    className="footer-socials-img"
                    src="images/letterLinkedIn.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <NavLink className="footerNav" to="/" exact={true} activeClassName="selectedNav">
                <h2>Home</h2>
              </NavLink>
              <HashLink className="subFooter"smooth to="/Home#about">
                What We Do
              </HashLink>
              <HashLink className="subFooter"smooth to="/Home#services">
                Our Services
              </HashLink>
              <HashLink className="subFooter"smooth to="/Home#apply">
                Apply
              </HashLink>
              <HashLink className="subFooter"smooth to="/Home#follow">
                Follow Our Mission
              </HashLink>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <NavLink className="footerNav" to="/About" activeClassName="selectedNav">
                <h2>About</h2>
              </NavLink>
              <HashLink className="subFooter"smooth to="/About#us">
                Who Are We?
              </HashLink>
              <HashLink className="subFooter"smooth to="/About#mission">
                Our Mission
              </HashLink>
              <HashLink className="subFooter"smooth to="/About#values">
                Our Values
              </HashLink>
              <HashLink className="subFooter"smooth to="/About#team">
                Our Team
              </HashLink>
              <HashLink className="subFooter"smooth to="/About#letter">
                Letter from our Founder
              </HashLink>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <NavLink className="footerNav" to="/Portfolio" activeClassName="selectedNav">
                <h2>Portfolio</h2>
              </NavLink>
              <HashLink className="subFooter"smooth to="/Portfolio#highlights">
                Highlights
              </HashLink>
              <HashLink className="subFooter"smooth to="/Portfolio#portfolio">
                Portfolio
              </HashLink>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <NavLink className="footerNav" to="/Apply" activeClassName="selectedNav">
                <h2>Apply</h2>
              </NavLink>
              <HashLink className="subFooter"smooth to="/Apply#ApplyBanner">
                Apply
              </HashLink>
              <HashLink className="subFooter"smooth to="/Apply#FAQ">
                FAQ
              </HashLink>
              <HashLink className="subFooter"smooth to="/Apply#commitment">
                What It Takes
              </HashLink>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <NavLink className="footerNav" to="/Events" activeClassName="selectedNav">
                <h2>Events</h2>
              </NavLink>
              <HashLink className="subFooter"smooth to="/Events#upcoming">
                Upcoming Events
              </HashLink>
              <HashLink className="subFooter"smooth to="/Events#speakers">
                Past Speakers
              </HashLink>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <NavLink className="footerNav" to="/Contact" activeClassName="selectedNav">
                <h2>Contact Us</h2>
              </NavLink>
              <HashLink className="subFooter"smooth to="/Contact/#contact-form">Send us a Message</HashLink>
              <HashLink className="subFooter"smooth to="/Contact/#follow">
                Follow our Mission
              </HashLink>
            </div>
          </div>
        </div>
        <section className="copyright">
          <p className="copyright-wrapper">Creator's Corner 2021</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
