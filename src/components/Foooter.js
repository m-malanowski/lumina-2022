import React from "react"
import logo from "../assets/logo.svg"
import MainBtn from "../components/MainBtn"
import iconBehance from "../../src/assets/social-icons/behance2.svg"
import iconInstagram from "../../src/assets/social-icons/instagram2.svg"
import iconDribble from "../../src/assets/social-icons/dribbble2.svg"
import iconFB from "../../src/assets/social-icons/facebook2.svg"
import iconYT from "../../src/assets/social-icons/github2.svg"

const Foooter = () => {
  return (
    <section className="foooter">
      <div>
        <div className="foooter-logo">
          <a href="/">
            <img src={logo} width={250} alt="Lumina Studio - Agencja Interaktywna" />
          </a>
        </div>
        <div>
          <ul>
            <li><a className="link link--kale" href="">O Nas</a></li>
            <li><a className="link link--kale" href="">Usługi</a></li>
            <li><a className="link link--kale" href="">Realizacje</a></li>
            <li><a className="link link--kale" href="">Blog</a></li>
            <li><a className="link link--kale" href="">Kontakt</a></li>
          </ul>
        </div>
        <div className="subscribe-wrapper">
          <p>Subscribe for drop updates</p>
          <MainBtn title="Subskrybcja"/>
        </div>
        <div className="social-links-wrapper">
          <p>Social Media</p>
          <ul>
            <li><a href="https://www.behance.net/lumina-studio"><img src={iconBehance} alt="Lumina STD" /></a></li>
            <li><a href="https://www.instagram.com/_luminastudio/"><img src={iconInstagram} alt="Lumina STD" /></a></li>
            <li><a href="https://www.behance.net/luminastudio2"><img src={iconDribble} alt="Lumina STD" /></a></li>
            <li><a href="https://www.facebook.com/hello.lumina.studio"><img src={iconFB} alt="Lumina STD" /></a></li>
            <li><a href="https://www.youtube.com/channel/UCwZ6P8-qBseEI32njO-8PcA"><img src={iconYT} alt="Lumina STD" /></a></li>
          </ul>
        </div>
        <p className="copy">Lumina Studio © 2021 All Rights Reserved.</p>

      </div>

    </section>
  )
}

export default Foooter
