import React, { useRef } from "react"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO"
import Worldwide from "../components/Worldwide"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import SectionMarquee from "../components/SectionMarquee"
import Foooter from "../components/Foooter"
import img from "../assets/imgs/globe-rotating.gif"

const Kontakt = () => {
  const containerRef = useRef(null)

  return (
    <>
      <SEO title="LUMINA STUDIO | Kontakt. Darmowa Wycena - Strony Internetowe. Tworzenie Stron Internetowych"
           description="Zadzwoń I Umów Się Na Bezpłatną Konultację. Tel. 506 870 672. Sklepy internetowe. Projektowanie I Tworzenie Sklepów Internetowych, Profesjonalny Sklep Internetowy"
        // schemaMarkup={schema}
      />
      <Helmet bodyAttributes={{
        id: "contact-page"
      }} />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
          smartphone: {
            smooth: true
          },
          mobile: {
            smooth: true
          }
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <main className=" container-fluid" data-scroll-container ref={containerRef}>

          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={false} fourthTapeScroll={false}
                          thirdTapeScroll={false}
                          subSectionMarqueeTitle={true}
                          title="Kontakt"
                          dataScrollPosition="bottom" dataScrollSpeed="2" />

          <div className="contact-wrapper">
            <div className="drop-line"
                 data-scroll
                 data-scroll-speed="2"
            >
              <h2>Drop us a line or two</h2>
              <ul>
                <li>Email: <a className="link link--kale" href="">hello@lumina.studio</a></li>
                <li>Instagram: <a className="link " href="">hello@lumina.studio</a></li>
                <li>Dribble: <a className="link " href="">hello@lumina.studio</a></li>
              </ul>
            </div>

            <div className="address"
                 data-scroll
                 data-scroll-speed="1"
            >
              <h2>Adres</h2>
              <ul>
                <li>👩‍💻  Pracujemy 🏠 zdalnie  </li>
                <li>Z Elbląga i Wrocławia</li>
                {/*<li>Elbląg: Moniuszki 3/45</li>*/}
              </ul>
            </div>

            <div className="stars-wrapper contact">
              <div className="star star-one"></div>
              <div className="star star-two"></div>
              <div className="star star-three"></div>
            </div>

            <div className="bg-dots contact">
              <div className="item item-1" data-scroll data-scroll-speed="-4"></div>
              <div className="item item-2" data-scroll data-scroll-speed="-2"></div>
            </div>

            <img src={img} width={35} alt="" />

          </div>

          <Worldwide />
          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                          secondTapeScroll={true} fourthTapeScroll={false}
                          thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />
          <Foooter />

        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export default Kontakt
