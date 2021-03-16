import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavTabs.scss";

function NavTabs() {
  const [button, setButton] = useState(true);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    showHamburger();
  }, []);

  const closeHamburger = () => setClick(false);
  const showHamburger = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showHamburger);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeHamburger}>
            <img height={40} src="/images/ccLogoW2.png" alt="logo" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavHashLink
                to="/About#top"
                activeClassName="selectedNav"
                className="nav-links"
                onClick={closeHamburger}
              >
                About
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                to="/Portfolio#top"
                activeClassName="selectedNav"
                className="nav-links"
                onClick={closeHamburger}
              >
                Our Portfolio
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                to="/Apply#top"
                activeClassName="selectedNav"
                className="nav-links"
                onClick={closeHamburger}
              >
                Apply
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                to="/Events#top"
                activeClassName="selectedNav"
                className="nav-links"
                onClick={closeHamburger}
              >
                Events
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                to="/Contact#top"
                activeClassName="selectedNav"
                className="nav-links"
                onClick={closeHamburger}
              >
                Contact Us
              </NavHashLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavTabs;
