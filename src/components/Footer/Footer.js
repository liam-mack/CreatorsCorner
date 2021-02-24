import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <Link  className="footerLink" to="/">
            <h2>Home</h2>
          </Link>
          <Link  className="footerLink" to="/About">
            <h2>Page 1</h2>
          </Link>
          <Link  className="footerLink" to="/Programs">
            <h2>Page 2</h2>
          </Link>
          <Link  className="footerLink" to="/News">
            <h2>Page 3</h2>
          </Link>
          <Link  className="footerLink" to="/Staff">
            <h2>Page 4</h2>
          </Link>
          <Link  className="footerLink" to="/Contact">
            <h2>Page 5</h2>
          </Link>
        </div>
      </div>

      <div className="footer-socials">
        <div className="footer-logo">
          <img
            src="/images/FooterLogo.png"
            alt="Lorem Ipsum"
            className="footerLogo"
          ></img>
        </div>
        <div className="footer-socials-wrapper">
          <small className="footer-rights">Copyright © 2021 Generic Company</small>
          <br></br>
          <small className="footer-rights">All Rights Reserved.</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook-square" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fa fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/twitter"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fa fa-twitter" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
