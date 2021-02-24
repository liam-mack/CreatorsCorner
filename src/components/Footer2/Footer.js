import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function Footer() {
  return (
    <div className="footerContainer">
      <div class="footerLinks">
        <div className="footer-link-wrapper">
          <div class="footer-link-items socials">
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
          <div class="footer-link-items">
            <Link to ="/"><h2>Home</h2></Link>
            <HashLink smooth to="/Home#homeAbout">What We Do</HashLink>
            <HashLink smooth to="/Home#homeServices">Our Services</HashLink>
            <HashLink smooth to="/Home#homeApply">Apply</HashLink>
            <HashLink smooth to="/Home#homeFollow">Follow Our Mission</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to ="/About"><h2>About</h2></Link>
            <HashLink smooth to="/About#aboutWho">Who Are We?</HashLink>
            <HashLink smooth to="/About#aboutMission">Our Mission</HashLink>
            <HashLink smooth to="/About#aboutValues">Our Values</HashLink>
            <HashLink smooth to="/About#aboutTeam">Our Team</HashLink>
            <HashLink smooth to="/About#aboutLetter">A Letter from our Founder</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/Apply"><h2>Apply</h2></Link>
            <HashLink smooth to="/Apply#ApplyBanner">Apply</HashLink>
            <HashLink smooth to="/Apply#applyClient">FAQ</HashLink>
            <HashLink smooth to="/Apply#applyList">What It Takes</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to ="/Events"><h2>Events</h2></Link>
            <HashLink to="/Events#eventUpcoming">Upcoming Events</HashLink>
            <HashLink to="/Events#eventSpeakers">Past Speakers</HashLink>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/Contact"><h2>Contact Us</h2></Link>
            <Link to="/Contact">Send us a Message</Link>
            <HashLink smooth to="/Contact#contactFollow">Follow our Mission</HashLink>
          </div>
        </div>
      </div>
      <section class="copyright">
        <p class="copyright-wrapper">Creator's Corner 2021</p>
      </section>
    </div>
  );
}

export default Footer;
