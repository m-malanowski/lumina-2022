import React, { useEffect, useRef, useState } from "react"
import orbitProcess from "../assets/icons/orbitProcess.png"
import { graphql, Link } from "gatsby"
import orbitMain from "../assets/icons/orbitMainViewNew.svg"
import handDown from "../assets/icons/handDown.svg"
import SEO from "../components/SEO"
import ProjectsSubsectionNew from "../components/ProjectsSubsectionNew"
import Worldwide from "../components/Worldwide"
import smallStar from "../assets/icons/smallStar.svg"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import SectionMarquee from "../components/SectionMarquee"
import LowerFooter from "../components/LowerFooter"
import arrow from "../assets/icons/right-arrow.svg"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import orbitMoreSection from "../assets/icons/orbitMoreSection.svg"
import ArticlesSlider from "../components/ArticlesSlider"
import IndexProjects from "../components/IndexProjects"
import emoji from "../assets/imgs/emoji.png"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import { motion } from "framer-motion"
import ContactSubsec from "../components/ContactSubsec"
import serviceStickersSmall from "../assets/icons/serviceStickersSmall.svg"
import FakeLoader from "../components/FakeLoader"
import Foooter from "../components/Foooter"
import globe from "../assets/icons/globe.svg"
import MainBtn from "../components/MainBtn"
import trueStar from "../assets/icons/true-star.svg"

const HomePage = () => {

  const containerRef = useRef(null)

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "lumina.studio - Tworzenie Stron Internetowych",
    "hasMap": "https://www.google.com/maps/d/u/0/edit?mid=10Zl8pYoh3_82OvkSYeae7nnzrYM-XZAh&usp=sharing",
    "image": "https://lumina.studio/facebook.png",
    "@id": "",
    "url": "https://lumina.studio",
    "telephone": "+ 48 506 870 672",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Królewiecka 21B",
      "addressLocality": "Elbląg",
      "postalCode": "82-300",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.163358,
      "longitude": 19.400674
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:30",
      "closes": "18:00"
    },
    "sameAs": [
      "https://twitter.com/luminastudio2",
      "https://www.facebook.com/hello.lumina.studio",
      "https://www.instagram.com/_luminastudio/",
      "https://www.youtube.com/channel/UCwZ6P8-qBseEI32njO-8PcA",
      "https://www.linkedin.com/company/luminastudio/",
      "https://www.google.com/maps/d/u/0/edit?mid=10Zl8pYoh3_82OvkSYeae7nnzrYM-XZAh&usp=sharing"
    ]
  }

  return (

    <>
      <SEO title="LUMINA STUDIO | Agencja Interaktywna"
           description="Na Czas Naszej Współpracy Stajemy Się Twoją Prywatną Agencją Interaktywną. Tworzymy Sklepy Internetowe Oraz Nowoczesne Strony WWW Dla Firm. Oferujemy Także Marketing Internetowy I Kampanie Reklamowe."
           schemaMarkup={schema}
      />

      <FakeLoader className="fake-loader-wrapper"/>

      <LocomotiveScrollProvider
        options={
          {
            lerp: 0.05,
            smooth: true,
            getDirection: true,
            smartphone: {
              smooth: true
            },
            mobile: {
              smooth: true
            }
          }
        }
        watch={
          []
        }
        containerRef={containerRef}
      >

        <main className="index-page container-fluid" data-scroll-container ref={containerRef}>

          <motion.div
            // // style={{overflow: "hidden"}}
            // initial={{ opacity: 0 }}
            // animate={{
            //   opacity: 1,
            //   transition: {
            //     delay: 3.8,
            //     duration: 1,
            //     ease: [0.6, 0.01, -0.05, 0.9]
            //   }
            // }}
            className="index-page">

            {/*<section className="section-main-container">*/}
            {/*  <div className="main-container">*/}
            
            {/*    <TriggerText threshold=".5" delay="4">*/}
            {/*      <h2*/}
            {/*        data-scroll*/}
            {/*        data-scroll-speed="-1"*/}
            {/*        data-scroll-direction="horizontal"*/}
            {/*      >We are a brand</h2>*/}
            
            {/*    </TriggerText>*/}
            
            {/*    <TriggerText threshold=".5" delay="4.2">*/}
            {/*      <h2*/}
            {/*        data-scroll*/}
            {/*        data-scroll-speed="-3"*/}
            {/*        data-scroll-direction="horizontal"*/}
            {/*      >of collective</h2>*/}
            {/*    </TriggerText>*/}
            
            {/*    <TriggerText threshold=".5" delay="4.3">*/}
            {/*      <h2*/}
            {/*        data-scroll*/}
            {/*        data-scroll-speed="1"*/}
            {/*        data-scroll-direction="horizontal"*/}
            {/*      ><span>creativity</span></h2>*/}
            
            {/*    </TriggerText>*/}
            
            {/*    /!*<div className="scroll-down">*!/*/}
            {/*    /!*  <TriggerImg delay={1.2}>*!/*/}
            {/*    /!*    <img width="100" className="index-hand" src={handDown} alt="" />*!/*/}
            {/*    /!*  </TriggerImg>*!/*/}
            {/*    /!*</div>*!/*/}
            
            {/*    <div className="stars-wrapper">*/}
            {/*      <div className="star star-one"></div>*/}
            {/*      <div className="star star-two"></div>*/}
            {/*      <div className="star star-three"></div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}


            <section className="section-main-container">
              <TriggerText threshold=".5" delay="3.4">

                <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                                secondTapeScroll={true} thirdTapeScroll={true} fourthTapeScroll={false}
                                dataScrollPosition="top" dataScrollSpeed="-10" />

              </TriggerText>

            </section>


            {/*<section>*/}
            {/*  <div className="">*/}
            {/*    <div className="subsec-body">*/}
            {/*      <div className="ss-body-first">*/}
            {/*      </div>*/}
            {/*      <div className="ss-body-second">*/}
            {/*        <TriggerText threshold="0" delay=".5">*/}
            {/*          <p> Nasza agencja specjializuję się w tworzeniu aplikacji internetowych oraz <em> identyfikacji wizualnej </em> dla firm.*/}
            {/*            Przykładamy dużą uwagę do długofalowych relacji, opartych na wzajemnym zaufaniu.*/}
            {/*          </p>*/}
            {/*        </TriggerText>*/}

            {/*        <TriggerText threshold="0" delay=".35">*/}
            {/*          <span className="subsec-span">Lumina Studio</span>*/}
            {/*        </TriggerText>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

            {/*<section className="cta-section">*/}
            {/*  <h2>Let's partner up!</h2>*/}
            {/*  <p>Send us an email with a brief description of your <br/> company and*/}
            {/*    suggestions on our future cooperation </p>*/}

            {/*  <div className="service-title">*/}
            {/*    <h5>Dowiedz się więcej</h5>*/}
            {/*    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />*/}
            {/*  </div>*/}

            {/*  <div className="stars-wrapper">*/}
            {/*    <div className="star star-one"></div>*/}
            {/*    <div className="star star-two"></div>*/}
            {/*    <div className="star star-three"></div>*/}
            {/*  </div>*/}
            {/*</section>*/}


            {/*<Worldwide />*/}

            <section className="index-about">

              <div className="bg-dots index">
                <div className="item item-1" data-scroll data-scroll-speed="-2"></div>
                <div className="item item-2" data-scroll data-scroll-speed="-1"></div>
              </div>

              <div className="new-subsec-body">
                <div className="subsec-span-wprapper">

                  <TriggerImg>
                    {/*<div className="star"></div>*/}
                    <img className='rotating-star' src={trueStar} width={30} alt="" />
                  </TriggerImg>

                  <TriggerText threshold=".35" delay=".35">
                    <span
                      data-scroll
                      data-scroll-speed="-3.5"
                      className="subsec-span">Why we do what we do</span>
                  </TriggerText>
                </div>
                <TriggerText threshold=".45" delay=".35">
                  <p
                    data-scroll
                    data-scroll-speed="-.5"
                  >
                    Brooklyn man bun intelligentsia selfies shaman, meggings godard slow-carb flannel. Ramps
                    church-key umami dreamcatcher <em>jean chips </em> next level brooklyn marfa VHS bitters scen.
                  </p>
                </TriggerText>

              </div>

              <div className="about-description-wrapper">

                <div className="stars-wrapper">
                  <div className="star star-one"></div>
                  <div className="star star-two"></div>
                  <div className="star star-three"></div>
                </div>

                <div>
                  {/*<div></div>*/}
                  <div></div>
                  <TriggerText threshold=".1" delay=".35">
                    <p
                      data-scroll
                      data-scroll-speed="-1"
                    >DIY actually cardigan post-ironic fashion amel pin. IPhone pop-up la croix salvia hell of
                      franze kale chips shoreditch deep v venmo pok pok you
                      probably haven't heard of them. juice. Cliche typewriter narwhal fixie.</p>
                  </TriggerText>
                </div>

                <div className="mt-5">
                  <div></div>
                  <TriggerText threshold=".1" delay=".45">
                    <p
                      data-scroll
                      data-scroll-speed="-1"
                    >Meh health goth whatever bushwick knausgaard, gentrify lumbersexual helvetica squid <em>YOLO</em> brunch.
                      Venmo occupy lumbersexual cliche.
                    </p>
                  </TriggerText>

                  {/*<TriggerText threshold=".5" delay=".8">*/}
                    {/*<p>IPhone pop-up la croix salvia hell of franzenly haven't heard of them. </p>*/}
                  {/*</TriggerText>*/}
                </div>
              </div>

              <Worldwide />


              <div className="subsec-header">

                <TriggerText threshold=".5" delay=".5">
                  <h2 className="subsec-title">Usługi</h2>
                </TriggerText>

                <TriggerText threshold=".5" delay=".5">
                  <span className="">01.</span>
                </TriggerText>
              </div>
            </section>

            <section className="index-services">
              <div className="wrapper">
                <div>

                  <TriggerText threshold=".4" delay=".4">
                    <div className="service-title">
                      <h5>Design</h5>
                      <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                    </div>
                  </TriggerText>

                  <TriggerText threshold=".4" delay=".5">
                    <div className="service-title">
                      <h5>Branding</h5>
                      <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                    </div>
                  </TriggerText>

                  <TriggerText threshold=".4" delay=".6">
                    <div className="service-title">
                      <h5>Digital</h5>
                      <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                    </div>
                  </TriggerText>

                </div>
                <div>
                  <TriggerText threshold=".4" delay=".7">
                    <div className="service-title">
                      <h5>Ecommerce</h5>
                      <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                    </div>
                  </TriggerText>


                  <TriggerText threshold=".4" delay=".8">
                    <div className="service-title">
                      <h5>Web development</h5>
                      <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                    </div>
                  </TriggerText>

                  <TriggerText threshold=".4" delay=".9">
                    <div className="service-title">
                      <h5>Social media</h5>
                      <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                    </div>
                  </TriggerText>

                </div>
                <div>
                  <TriggerText threshold=".4" delay="1">
                    <div className="service-title">
                      <h5>Strategy</h5>
                      <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                    </div>
                  </TriggerText>

                </div>

              </div>


            </section>

            <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                            secondTapeScroll={false} thirdTapeScroll={false} dataScrollPosition="bottom"
                            dataScrollSpeed="6" />


            <section className="new-index-projects">
              {/*<Worldwide />*/}

              {/*<TriggerImg delay={.5} threshold={0}>*/}
              {/*  <div className="globe-stars-wrapper stars-wrapper">*/}
              {/*    <img className="globe mb-5" width="125" src={globe} alt="Agencja interaktywna lumina studio" />*/}
              {/*      <div className="star star-one"></div>*/}
              {/*      <div className="star star-two"></div>*/}
              {/*      <div className="star star-three"></div>*/}
              {/*  </div>*/}
              {/*</TriggerImg>*/}

              <div className="subsec-header">
                <TriggerText threshold=".5" delay=".5">
                  <h2 className="subsec-title">Some our works <br /> to keep an eye on</h2>
                </TriggerText>
                <TriggerText threshold=".5" delay=".5">
                  <span className="">02.</span>
                </TriggerText>
              </div>

              <TriggerText threshold=".25" delay=".25">
                <IndexProjects></IndexProjects>
              </TriggerText>

              {/*<Link to="/kontakt" className="cta-btn" > Rozpocznij projekt </Link>*/}


              {/*<MainBtn*/}
              {/*  data-scroll*/}
              {/*  data-scroll-speed="-1"*/}
              {/*  title="Więcej projektów" url="/agencja-interaktywna-realizacje"/>*/}

              {/*<div className="projects-btn">*/}
              {/*  <div className="service-title">*/}
              {/*    <h5>Sprawdź więcej projektów</h5>*/}
              {/*    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />*/}
              {/*  </div>*/}
              {/*</div>*/}

              <TriggerImg delay={.5} threshold={0}>
                <div className="globe-stars-wrapper stars-wrapper">
                  <img className="globe mb-5" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
                  <div className="star star-one"></div>
                  <div className="star star-two"></div>
                  <div className="star star-three"></div>
                </div>
              </TriggerImg>

            </section>


            {/*<ProjectsSubsectionNew />*/}

            <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                            secondTapeScroll={true} thirdTapeScroll={false} dataScrollPosition="top"
                            dataScrollSpeed="4" />


            <section className="articles-subsection">
              <div className="subsec-header">
                <TriggerText threshold=".3" delay=".35">
                  <h2 className="subsec-title">Artykuły</h2>
                  <br />
                  <p>Zapoznaj się z artykułami</p>
                </TriggerText>
                <TriggerText threshold=".3" delay=".35">
                  <span className="">03.</span>
                </TriggerText>
              </div>

              <section className="services-page-slider break-out">
                <TriggerText threshold=".3" delay=".35">
                  <ArticlesSlider />
                </TriggerText>
              </section>
            </section>


            {/*<section className="section-main-process">*/}
            {/*  <div className="">*/}
            {/*    <div className="subsec-header">*/}
            {/*      <TriggerText threshold=".5" delay=".5">*/}
            {/*        <span className="">01.</span>*/}
            {/*      </TriggerText>*/}
            {/*      <TriggerText threshold=".5" delay=".5">*/}
            {/*        <h2 className="subsec-title">O nas</h2>*/}
            {/*      </TriggerText>*/}
            {/*    </div>*/}
            {/*    <div className="subsec-body">*/}
            {/*      <div className="ss-body-second">*/}
            {/*        <TriggerText threshold=".5" delay=".5">*/}
            {/*          <p>*/}
            {/*            Jeżeli tak jak my uważasz, że większość stron internetowych dostępnych w internecie jest nudna i*/}
            {/*            bez polotu, to <em>dobrze trafiłeś.</em>*/}
            {/*          </p>*/}
            {/*        </TriggerText>*/}
            {/*        <TriggerText threshold=".5" delay=".5">*/}
            {/*          <span className="subsec-span">Kim jesteśmy</span>*/}
            {/*        </TriggerText>*/}

            {/*        /!*<TriggerImg>*!/*/}
            {/*        /!*  <img*!/*/}
            {/*        /!*    data-scroll*!/*/}
            {/*        /!*    data-scroll-speed="-2"*!/*/}
            {/*        /!*    className="orbit" width="600" src={orbitProcess} alt="" />*!/*/}
            {/*        /!*</TriggerImg>*!/*/}

            {/*      </div>*/}
            {/*      <div className="ss-body-first">*/}
            {/*        <div className="single-process">*/}
            {/*          <TriggerText threshold=".5" delay=".5">*/}
            {/*            <h3 className="d-flex"> Branding <span className="d-flex"><img src={arrow} alt="" width="14px" className="ml-2 align-self-start" /></span></h3>*/}
            {/*            /!*<span>01</span>*!/*/}
            {/*          </TriggerText>*/}
            {/*          <TriggerText threshold=".5" delay=".5">*/}
            {/*            <p>Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie elementy*/}
            {/*              identyfikacji wizualnej były spójne ze sobą jak*/}
            {/*              również odzwierciedlały branżę lub sprzedawany produkt.</p>*/}
            {/*          </TriggerText>*/}

            {/*          /!*<TriggerText threshold=".5" delay=".5">*!/*/}
            {/*          /!*  <div className="learn-more">*!/*/}
            {/*          /!*    <Link to="/uslugi">*!/*/}
            {/*          /!*      <span>Sprawdź</span>*!/*/}
            {/*          /!*      <span />*!/*/}
            {/*          /!*      <span>Więcej</span>*!/*/}
            {/*          /!*    </Link>*!/*/}
            {/*          /!*  </div>*!/*/}
            {/*          /!*</TriggerText>*!/*/}

            {/*        </div>*/}

            {/*        <div className="single-process">*/}
            {/*          <TriggerText threshold=".5" delay=".5">*/}
            {/*            <h3>Web Development</h3>*/}
            {/*            /!*<span>02</span>*!/*/}
            {/*          </TriggerText>*/}
            {/*          <TriggerText threshold=".5" delay=".5">*/}
            {/*            <p>W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania*/}
            {/*              responsywnych stron internetowych.*/}
            {/*              Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania*/}
            {/*              treścią.</p>*/}
            {/*          </TriggerText>*/}

            {/*          /!*<TriggerText threshold=".5" delay=".5">*!/*/}
            {/*          /!*  <div className="learn-more">*!/*/}
            {/*          /!*    <Link to="/uslugi">*!/*/}
            {/*          /!*      <span>Sprawdź</span>*!/*/}
            {/*          /!*      <span />*!/*/}
            {/*          /!*      <span>Więcej</span>*!/*/}
            {/*          /!*    </Link>*!/*/}
            {/*          /!*  </div>*!/*/}
            {/*          /!*</TriggerText>*!/*/}

            {/*        </div>*/}

            {/*        <div className="single-process">*/}
            {/*          <TriggerText threshold=".5" delay=".5">*/}
            {/*            <h3>Social media</h3>*/}
            {/*            /!*<span>03</span>*!/*/}
            {/*          </TriggerText>*/}
            {/*          <TriggerText threshold=".5" delay=".5">*/}
            {/*            <p>Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie. Idealnym rozwiązaniem*/}
            {/*              są kampanie Google Ads,*/}
            {/*              Facebook oraz pozycjonowanie stron internetowych.</p>*/}
            {/*          </TriggerText>*/}

            {/*          /!*<TriggerText threshold=".5" delay=".5">*!/*/}
            {/*          /!*  <div className="learn-more">*!/*/}
            {/*          /!*    <Link to="/uslugi">*!/*/}
            {/*          /!*      <span>Sprawdź</span>*!/*/}
            {/*          /!*      <span />*!/*/}
            {/*          /!*      <span>Więcej</span>*!/*/}
            {/*          /!*    </Link>*!/*/}
            {/*          /!*  </div>*!/*/}
            {/*          /!*</TriggerText>*!/*/}

            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*</section>*/}


            <ContactSubsec />



            <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                            secondTapeScroll={true} fourthTapeScroll={false}
                            thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />
            <Foooter/>

          </motion.div>

        </main>
        {/*<div className="site-loader in"></div>*/}

      </LocomotiveScrollProvider>

    </>
  )
}


export default HomePage
