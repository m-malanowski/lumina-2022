import React from "react"
import SocialLinks from "../constants/socialLinks"
// import arrow from "../assets/icons/right-arrow.svg"
// import orbitFooter from "../assets/icons/orbitFooter.png"
import TriggerText from "./TriggerText"
import star from "../assets/icons/star.svg"
import logo from "../assets/imgs/lumina-logo-nav.svg"
import Socials from "../constants/socialLinks"
const Footer = () => {
  return (
    <>
      <footer>

        {/*<img*/}
        {/*  className="worldwide-star " width="250" src={star} alt="Agencja interaktywna lumina studio"*/}
        {/*/>*/}
        {/*<svg className="c-gear__svg mt-5" width="90" height="91" viewBox="0 0 90 91" fill="none"*/}
        {/*     xmlns="http://www.w3.org/2000/svg" data-v-b2cabd8c="">*/}
        {/*  <path fill-rule="evenodd" clip-rule="evenodd"*/}
        {/*        d="M47.7 0.5H42.3V18.5L43.74 42.62L27.72 24.44L15.12 11.84L11.34 15.62L24.12 28.4L42.3 44.42L18 42.8H0V48.2H18L42.12 46.76L23.94 62.78L11.16 75.56L14.94 79.34L27.72 66.56L43.74 48.38L42.3 72.5V90.5H47.7V72.5L46.26 48.38L62.28 66.56L75.06 79.34L78.84 75.56L66.06 62.78L47.88 46.76L72 48.2H90V42.8H72L47.88 44.24L66.06 28.22L78.84 15.44L75.06 11.66L62.28 24.44L46.26 42.62L47.7 18.5V0.5Z"*/}
        {/*        fill="#fff" data-v-b2cabd8c=""></path>*/}
        {/*</svg>*/}

        <div className="footer-bottom">
          <TriggerText threshold="0" delay=".5">
            <h3 className="motto">Studio for <br/> ambitious <br/> <em>brands</em> </h3>
          </TriggerText>

          <TriggerText threshold="0" delay="1.1">
            <h4 className="follow-us">Śledź nas</h4>
            <SocialLinks/>
          </TriggerText>
          <TriggerText threshold="0" delay=".9">
            <ul>
              <li><h4>Elbląg</h4></li>
              <li>
                <a href="mailto:info@lumina.studio" className="social-link link link--kale grey">
                  info@lumina.studio
                </a>
              </li>
              <li> +(48) 506 870 672 </li>
              <li>Królewiecka 21B</li>
              <li>82-300 Elbląg</li>
            </ul>
          </TriggerText>
          <TriggerText threshold="0" delay=".7">
            <ul>
              <li><h4>Wrocław</h4></li>
              <li>
                <a href="mailto:hello@lumina.studio" className="social-link link link--kale grey">
                  hello@lumina.studio
                </a>
              </li>
              <li>+(48) 606 304 224 </li>
              <li>Buforowa 101A</li>
              <li>52-131 Wrocław</li>
            </ul>
          </TriggerText>
        </div>

        {/*<div className="footer-bottom">*/}
        {/*  <a href="/" className={`navbar-logo ${isOpen? "closed" : "open"}`}>*/}
        {/*    <img src={logo} width={220} alt="Lumina Studio - Agencja Interaktywna" />*/}
        {/*  </a>*/}

        {/*  <Socials/>*/}

        {/*</div>*/}

      </footer>
    </>
  )
}

export default Footer
