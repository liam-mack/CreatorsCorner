import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../icons/ccLogoW.svg";
import "./NavTabs.scss";

function NavTabs() {

  const [button, setButton] = useState(true);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect( ()=> {
    showHamburger()
  }, []);

  const closeHamburger = () => setClick(false);
  const showHamburger = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  }



  window.addEventListener('resize', showHamburger);

  return (

    <>
      <div className="navbar">
        <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeHamburger}>
            <img height={40} src="/images/ccLogoW2.png" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
          { click ? <FaTimes /> : <FaBars /> }
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/About" activeClassName="selectedNav" className="nav-links" onClick={closeHamburger}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Portfolio" activeClassName="selectedNav" className="nav-links" onClick={closeHamburger}>
                Our Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Apply" activeClassName="selectedNav" className="nav-links" onClick={closeHamburger}>
                Apply
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Events" activeClassName="selectedNav" className="nav-links" onClick={closeHamburger}>
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contact" activeClassName="selectedNav" className="nav-links" onClick={closeHamburger}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavTabs;
