import React from "react"
import arrow from "../assets/icons/right-arrow.svg"
import { Link } from "gatsby"
import MainBtn from "./MainBtn"
import TriggerText from "../components/TriggerText"

const ContactSubsec = () => {
  return (
    <section className="cta-section">
      <TriggerText threshold=".4" delay=".25">
        <h2>Stwórzmy coś!</h2>
      </TriggerText>

      <TriggerText threshold=".4" delay=".35">
        <p
          data-scroll
          data-scroll-speed="-.2"
        >Send us an email with a brief description of your <br /> company and
          suggestions on our future cooperation </p>
       </TriggerText>

      {/*<Link to="/kontakt" className="cta-btn" > Rozpocznij projekt </Link>*/}

      <MainBtn
          data-scroll
          data-scroll-speed="-1"
          title="hello@lumina.studio" url="/kontakt"/>

      <div className="bg-dots cta-section">
        <div className="item item-1" data-scroll data-scroll-speed="-2"></div>
        <div className="item item-2" data-scroll data-scroll-speed="-1"></div>
      </div>

      <div className="stars-wrapper">
        <div className="star star-one"></div>
        <div className="star star-two"></div>
        <div className="star star-three"></div>
      </div>

    </section>
  )
}

export default ContactSubsec
