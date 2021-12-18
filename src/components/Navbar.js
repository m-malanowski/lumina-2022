import React from "react"
import PageLinks from "../constants/links"
import { motion } from "framer-motion"
import contrast from "../assets/icons/contrast.svg"
// import logo from "../assets/imgs/lumina-logo.png"
import { Link } from "gatsby"

import logo from "../assets/logo.svg"

import TriggerText from "../components/TriggerText"

const Navbar = ({ toggleSideBar, isOpen }) => {
  return (
    <nav className="navbar container-fluid"   >
      <div className="nav-header">

        <TriggerText threshold=".5" delay="4">
          <a href="/" className={`navbar-logo ${isOpen? "closed" : "open"}`}>
            <img src={logo} width={250} alt="Lumina Studio - Agencja Interaktywna" />
          </a>
        </TriggerText>
        {/*<h3>*/}
        {/*  <a href="/" className={`navbar-logo ${isOpen? "closed" : "open"}`}>LUMINA - STUDIO</a>*/}
        {/*</h3>*/}
      </div>

      {/*<img src={contrast} width="38"  alt="Zmien kontrast" />*/}

      <TriggerText threshold=".5" delay="4">
        <button type="button" className="toggle-btn" onClick={toggleSideBar} aria-label="menu-button">
          <div className={`nav-icon ${isOpen? "transformed" : ""}`}>
            <div/>
          </div>
        </button>
      </TriggerText>

      {/*<PageLinks styleClass="nav-links"/>*/}

      <div className="navbar-right">
        <TriggerText threshold=".5" delay="4">
          <div className={`${isOpen? "closed" : "open"}`}>
            <Link to="/kontakt" className="cta-btn" > Zacznij projekt </Link>
            {/*<a href="/kontakt" className="cta-btn">Zacznij projekt</a>*/}
          </div>
        </TriggerText>
      </div>

    </nav>
  )
}

export default Navbar
