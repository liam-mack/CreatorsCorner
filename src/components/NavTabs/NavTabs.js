import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
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
              <Link to="/About" className="nav-links" onClick={closeHamburger}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects" className="nav-links" onClick={closeHamburger}>
                Projects & Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Apply" className="nav-links" onClick={closeHamburger}>
                Apply
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Events" className="nav-links" onClick={closeHamburger}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-links" onClick={closeHamburger}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavTabs;
