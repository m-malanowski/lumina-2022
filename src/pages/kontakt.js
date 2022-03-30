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
        <main className="contact-page container-fluid" data-scroll-container ref={containerRef}>

          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={false} fourthTapeScroll={false}
                          thirdTapeScroll={false}
                          subSectionMarqueeTitle={true}
                          title="Kontakt"
                          dataScrollPosition="bottom" dataScrollSpeed="2" />

          {/*<div className="contact-wrapper">*/}
          {/*  <div className="drop-line"*/}
          {/*       data-scroll*/}
          {/*       data-scroll-speed="2"*/}
          {/*  >*/}
          {/*    <h2>Drop us a line or two</h2>*/}
          {/*    <ul>*/}
          {/*      <li>Email: <a className="link link--kale" href="">hello@lumina.studio</a></li>*/}
          {/*      <li>Instagram: <a className="link " href="">hello@lumina.studio</a></li>*/}
          {/*      <li>Dribble: <a className="link " href="">hello@lumina.studio</a></li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}

          {/*  <div className="address"*/}
          {/*       data-scroll*/}
          {/*       data-scroll-speed="1"*/}
          {/*  >*/}
          {/*    <h2>Adres</h2>*/}
          {/*    <ul>*/}
          {/*      <li>👩‍💻  Pracujemy 🏠 zdalnie  </li>*/}
          {/*      <li>Z Elbląga i Wrocławia</li>*/}
          {/*      /!*<li>Elbląg: Moniuszki 3/45</li>*!/*/}
          {/*    </ul>*/}
          {/*  </div>*/}

          {/*  <div className="stars-wrapper contact">*/}
          {/*    <div className="star star-one"></div>*/}
          {/*    <div className="star star-two"></div>*/}
          {/*    <div className="star star-three"></div>*/}
          {/*  </div>*/}

          {/*  <div className="bg-dots contact">*/}
          {/*    <div className="item item-1" data-scroll data-scroll-speed="-4"></div>*/}
          {/*    <div className="item item-2" data-scroll data-scroll-speed="-2"></div>*/}
          {/*  </div>*/}

          {/*  <img src={img} width={35} alt="" />*/}

          {/*</div>*/}

          <div className="contact-wrapper">

            {/*<img className="my-5" src={img} width={35} alt="" />*/}

            <h2>Fill in the form <br/> or just <em><a href="mailto:hello@lumina.studio">email us</a></em></h2>


            <form action="">
              <h5 className="align-center"><span>1.</span> Pick what you are interested in</h5>
              <div className="services-wrapper">
                <a href="" className="test-btn">Projektowanie stron</a>
                <a href="" className="test-btn">Front-end</a>
                <a href="" className="test-btn">Design</a>
                <a href="" className="test-btn">Logo</a>
                <a href="" className="test-btn">Aplikacje mobilne</a>
                <a href="" className="test-btn">Ilustracja</a>
              </div>

              <div className="input-wrapper">
                <label htmlFor="name">
                  <span>2.</span> Twoje imię
                  <input  name="name" type="text" placeholder="Podaj swoje imie" />
                </label>

                <label htmlFor="email">
                  <span>3.</span> Twój email
                  <input  name="email" type="text" placeholder="Podaj swój email" />
                </label>

                <label htmlFor="about">
                  <span>4.</span> Opisz swój projekt
                  <input  name="about" type="text" placeholder="Napisz kilka słów o projekcie" />
                </label>
              </div>

              <h5 className="align-center"><span>5.</span> Przeznaczony budżet (PLN)</h5>
              <div className="services-wrapper">
                <a href="" className="test-btn">3 - 7K</a>
                <a href="" className="test-btn">7 - 15K</a>
                <a href="" className="test-btn">> 15K</a>
              </div>

              {/*<a href="" className="test-btn ">Wyślij zgłoszenie</a>*/}

            </form>

            {/*<h3>👩‍💻  Pracujemy 🏠 zdalnie <br/> z Eląga i Wrocławia </h3>*/}

            <div className="stars-wrapper contact">
              {/*<div className="star star-one"></div>*/}
              <div className="star star-two"></div>
              <div className="star star-three"></div>
            </div>

            <div className="bg-dots contact">
              {/*<div className="item item-1" data-scroll data-scroll-speed="-4"></div>*/}
                <div className="item item-2" data-scroll data-scroll-speed="-2"></div>
              </div>


          </div>


          {/*<Worldwide />*/}
          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={true} fourthTapeScroll={false}
                          thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />
          <Foooter />

        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export default Kontakt
