import React from "react"
import arrow from "../assets/icons/right-arrow.svg"

const ContactSubsec = () => {
  return (
    <section className="cta-section">

      <h2>Stwórzmy coś!</h2>
      <p>Send us an email with a brief description of your <br /> company and
        suggestions on our future cooperation </p>

      <div className="service-title">
        <h5>Skontaktuj się</h5>
        <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
      </div>

      <div className="stars-wrapper">
        <div className="star star-one"></div>
        <div className="star star-two"></div>
        <div className="star star-three"></div>
      </div>

      {/*<svg className="c-gear__svg mt-5" width="90" height="91" viewBox="0 0 90 91" fill="none"*/}
      {/*     xmlns="http://www.w3.org/2000/svg" data-v-b2cabd8c="">*/}
      {/*  <path fill-rule="evenodd" clip-rule="evenodd"*/}
      {/*        d="M47.7 0.5H42.3V18.5L43.74 42.62L27.72 24.44L15.12 11.84L11.34 15.62L24.12 28.4L42.3 44.42L18 42.8H0V48.2H18L42.12 46.76L23.94 62.78L11.16 75.56L14.94 79.34L27.72 66.56L43.74 48.38L42.3 72.5V90.5H47.7V72.5L46.26 48.38L62.28 66.56L75.06 79.34L78.84 75.56L66.06 62.78L47.88 46.76L72 48.2H90V42.8H72L47.88 44.24L66.06 28.22L78.84 15.44L75.06 11.66L62.28 24.44L46.26 42.62L47.7 18.5V0.5Z"*/}
      {/*        fill="#fff" data-v-b2cabd8c=""></path>*/}
      {/*</svg>*/}

    </section>
  )
}

export default ContactSubsec
