import React, { useRef, useEffect } from "react";
// import Links from "../constants/links"
import Socials from "../constants/socialLinks"
// import orbitMain from "../assets/icons/orbitMain.png";
import mickyHand1 from "../assets/imgs/starSmallBlack.svg"
import mickyHand2 from "../assets/imgs/cloverSmallBlack.svg"
import mickyHand3 from "../assets/imgs/smallStarBlack.svg"
import mickyHand4 from "../assets/icons/asterisk.svg"
import { Link } from "gatsby"
import { gsap } from "gsap";
// import elo from "../assets/imgs/stickerLogo.png"
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  // staggerTextClose,
  // handleHover,
  // handleHoverExit,
  // handleCityReturn,
  // handleCity,
  staggerRevealClose
} from "./Animations";

const Sidebar = ({toggleSideBar, isOpen}) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  // let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let social = useRef(null);

  useEffect(() => {
    if (isOpen === false) {

      staggerRevealClose(reveal2, reveal1);
      // staggerTextClose(line1.current, line2.current, line3.current, line4.current);

      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
      // gsap.to(line1.current, { duration: 1, css: { opacity: ".2" } });

    } else if (
      isOpen === true ||
      (isOpen === true && isOpen.initial === null)
    ) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(social);
      staggerText(line1.current, line2.current, line3.current, line4.current);
    }
  }, [isOpen]);


  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu' >

      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>

        <div className='container-fluid break-out'>

          <nav className="menu">
            <div className="menu__item">
              <Link to="/o-nas" className="menu__item-link"
                    onClick={toggleSideBar}
                    ref={el => (line1.current = el)}

              >O nas</Link>
              {/*<a className="menu__item-link">Studio</a>*/}
              <img className="menu__item-img" src={mickyHand1} />
              <div className="marquee">
                <div className="marquee__inner">
                  <span>O nas - O nas - O nas - O nas - O nas - O nas - O nas</span>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <Link to="/uslugi" className="menu__item-link"
                    onClick={toggleSideBar}
                    ref={el => (line2.current = el)}
              >Usługi</Link>
              <img className="menu__item-img" src={mickyHand1}  />
              <div className="marquee">
                <div className="marquee__inner">
                  <span>Usługi - Usługi - Usługi - Usługi - Usługi - Usługi - Usługi</span>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <Link to="/agencja-interaktywna-realizacje" className="menu__item-link"
                    onClick={toggleSideBar}
                    ref={el => (line3.current = el)}
              >Projekty</Link>
              <img className="menu__item-img" src={mickyHand1} />
              <div className="marquee">
                <div className="marquee__inner">
							<span
              >Projekty - Projekty - Projekty - Projekty - Projekty - Projekty
								- Showcase</span
              >
                </div>
              </div>
            </div>
            <div className="menu__item">
              <Link to="/kontakt" className="menu__item-link"
                    onClick={toggleSideBar}
                    ref={el => (line4.current = el)}

              >Kontakt</Link>
              <img className="menu__item-img" src={mickyHand1} />
              <div className="marquee">
                <div className="marquee__inner">
							<span
              >Kontakt - Kontakt - Kontakt - Kontakt - Kontakt - Kontakt - Kontakt</span>
                </div>
              </div>
            </div>

            <div ref={el => (social = el)} className='locations' >
              {/*<p>Śledź nas:</p>*/}
              <Socials/>
              <Link
                to="/blog"
                className="social-link blog-link link link-black link--kale"
                onClick={toggleSideBar}
                >
                <img width="16" className="mr-1 rotating-star" src={mickyHand3}  />
                BLOG
              </Link>
            </div>

            {/*<img className="eloelo" src={elo} alt="" />*/}

          </nav>


        </div>
      </div>
    </div>
  );
}

export default Sidebar