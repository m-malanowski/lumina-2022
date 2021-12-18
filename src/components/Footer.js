import React from "react"
import SocialLinks from "../constants/socialLinks"
import arrow from "../assets/icons/right-arrow.svg"
import orbitFooter from "../assets/icons/orbitContact.svg"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
const Footer = () => {
  return (
    <>
      <footer className="container-fluid contact-page">
        <TriggerText threshold="0" delay=".8" cName="circle-wrapper">
          <div className="circle">
            <p>Brief</p>
          </div>
        </TriggerText>

        <div className="bg-dots">
          <div className="item item-1"></div>
        </div>

        <div className="footer-top">
          <div>
            <TriggerText threshold=".5" delay=".5">
              <span className="subsec-title">Zadzwoń <br/> +(48) 506 870 672 </span>
            </TriggerText>
            <TriggerText threshold=".5" delay=".7">
              <h5 className="mt-3"><a href="mailto:hello@lumina.studio">hello@lumina.studio</a></h5>
            </TriggerText>

            <TriggerText threshold=".5" delay=".8">
              {/*<a href="mailto:hello@lumina.studio"><button type="button" className="button outline footer-button">Wyślij wiadomość</button></a>*/}
              <button  className="cta-btn mt-5" >Wyślij wiadomość</button>
            </TriggerText>

            {/*<TriggerImg delay={1}>*/}
            {/*  <img className="orbit" width="1200" src={orbitFooter} alt="" />*/}
            {/*</TriggerImg>*/}
          </div>

        </div>

        <div className="footer-bottom">
          <TriggerText threshold="0" delay=".5">
            <h3 className="motto">Studio for <br/> ambitious <br/> <em>brands</em> </h3>
          </TriggerText>
          <TriggerText threshold="0" delay=".7">
            <ul>
              <li><h4>Wrocław</h4></li>
              <li>
                <a href="" className="social-link link link--kale">
                  hello@lumina.studio
                </a>
              </li>
              <li>+(48) 000 000 000 </li>
              <li>Buforowa 101A</li>
              <li>52-131 Wrocław</li>

            </ul>
          </TriggerText>
          <TriggerText threshold="0" delay=".9">
            <ul>
              <li><h4>Elbląg</h4></li>
              <li>
                <a href="" className="social-link link link--kale">
                  hello@lumina.studio
                </a>
              </li>
              <li> +(48) 506 870 672 </li>
              <li>Królewiecka 21B</li>
              <li>82-300 Elbląg</li>
            </ul>
          </TriggerText>

          <TriggerText threshold="0" delay="1.1">
            <h4>Śledź nas</h4>
            <SocialLinks/>
          </TriggerText>

        </div>
      </footer>
    </>
  )
}

export default Footer
