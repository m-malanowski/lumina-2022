import React from "react"
import Links from "../constants/links"
import Socials from "../constants/socialLinks"
import orbitMain from "../assets/icons/orbitMain.png";

const Sidebar = ({toggleSideBar, isOpen}) => {
  return (
    <>
      <div className={`sidebar  ${isOpen? "show-sidebar" : ""}`}>
        <div className="side-container container-fluid"  onClick={toggleSideBar}>

          <Links styleClass="sidebar-links"/>
          {/*<div className="sidebar-bottom">*/}
          {/*  <div className="sidebar-address">*/}
          {/*    <ul>*/}
          {/*      <li>Królewiecka 21b</li>*/}
          {/*      <li>82-300 Elbląg</li>*/}
          {/*      <br/>*/}
          {/*      <li><a href="mailto:hello@lumina.studio" className="link link--kale">hello@lumina.studio</a></li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*  <div className="sidebar-socials">*/}
          {/*    <Socials/>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  )
}

export default Sidebar