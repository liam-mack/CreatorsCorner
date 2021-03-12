import React from "react";
import "./Footer.scss";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <div className="footer-link-wrapper">
          <div className="footer-link-items socials">
            <img className="footer-logo-img"src="/images/ccLogoFooter.png"></img>
            <div className="footer-row">
            <img  className="footer-mail" src="/images/footerMail.png"></img>
            <a className="footer-email">creatorscornercu@gmail.com</a>
            </div>
            <div className="footer-row">
              <a href="https://www.instagram.com/creatorscornercu/"className="footer-socials" target="_blank"><img className="footer-socials-img"src="images/footerIG.png"></img></a>
              <a href="https://www.facebook.com/CreatorsCornerCU/"className="footer-socials" target="_blank"><img className="footer-socials-img" src="images/footerFB.png"></img></a>
              <a href="https://www.linkedin.com/company/creatorscornercu/"className="footer-socials" target="_blank"><img className="footer-socials-img"src="images/footerLinkedIn.png"></img></a>
            </div>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <NavLink to ="/" exact={true} activeClassName="selectedNav"><h2>Home</h2></NavLink>
            <HashLink smooth to="/Home#homeAbout">What We Do</HashLink>
            <HashLink smooth to="/Home#homeServices">Our Services</HashLink>
            <HashLink smooth to="/Home#homeApply">Apply</HashLink>
            <HashLink smooth to="/Home#homeFollow">Follow Our Mission</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <NavLink to ="/About" activeClassName="selectedNav"><h2>About</h2></NavLink>
            <HashLink smooth to="/About#aboutWho">Who Are We?</HashLink>
            <HashLink smooth to="/About#aboutMission">Our Mission</HashLink>
            <HashLink smooth to="/About#aboutValues">Our Values</HashLink>
            <HashLink smooth to="/About#aboutTeam">Our Team</HashLink>
            <HashLink smooth to="/About#aboutLetter">A Letter from our Founder</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <NavLink to="/Portfolio" activeClassName="selectedNav"><h2>Portfolio</h2></NavLink>
            <HashLink smooth to="/Portfolio#projectHighlights">Highlights</HashLink>
            <HashLink smooth to="/Portfolio#projectPortfolio">Portfolio</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <NavLink to="/Apply" activeClassName="selectedNav"><h2>Apply</h2></NavLink>
            <HashLink smooth to="/Apply#ApplyBanner">Apply</HashLink>
            <HashLink smooth to="/Apply#applyClient">FAQ</HashLink>
            <HashLink smooth to="/Apply#applyList">What It Takes</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <NavLink to ="/Events" activeClassName="selectedNav"><h2>Events</h2></NavLink>
            <HashLink smooth to="/Events#eventUpcoming">Upcoming Events</HashLink>
            <HashLink smooth to="/Events#eventSpeakers">Past Speakers</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <NavLink to="/Contact" activeClassName="selectedNav"><h2>Contact Us</h2></NavLink>
            <Link to="/Contact">Send us a Message</Link>
            <HashLink smooth to="/Contact#contactFollow">Follow our Mission</HashLink>
          </div>
        </div>
      </div>
      <section className="copyright">
        <p className="copyright-wrapper">Creator's Corner 2021</p>
      </section>
    </div>
  );
}

export default Footer;
