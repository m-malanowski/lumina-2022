import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import TriggerImg from "./TriggerImg"
import globe from "../assets/icons/globe.svg"
// ...GatsbyImageSharpFluid

const GlobeWithStars = () => {
  return <>
    <TriggerImg delay={.5} threshold={0}>
      <div className="globe-stars-wrapper stars-wrapper">
        <img className="globe mb-5" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
        <div className="star star-one"></div>
        <div className="star star-two"></div>
        <div className="star star-three"></div>
      </div>
    </TriggerImg>
  </>
}

export default GlobeWithStars
