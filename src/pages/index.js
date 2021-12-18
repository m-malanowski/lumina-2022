import React, { useEffect, useRef, useState } from "react"
import orbitProcess from "../assets/icons/orbitProcess.png"
import { Link } from "gatsby"
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

      <FakeLoader/>

      <LocomotiveScrollProvider
        options={
          {
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
            // style={{overflow: "hidden"}}
            initial={{opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 3.4,
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9]
              }
            }}
            className="index-page">

            {/*<section className="section-main-container">*/}
            {/*  <div className="main-container">*/}

            {/*    <TriggerText threshold=".5" delay=".8">*/}
            {/*      <h2*/}
            {/*        data-scroll*/}
            {/*        data-scroll-speed="-1"*/}
            {/*        data-scroll-direction="horizontal"*/}
            {/*      >We are a brand</h2>*/}

            {/*    </TriggerText>*/}

            {/*    <TriggerText threshold=".5" delay=".85">*/}
            {/*      <h2*/}
            {/*        data-scroll*/}
            {/*        data-scroll-speed="-3"*/}
            {/*        data-scroll-direction="horizontal"*/}
            {/*      >of collective</h2>*/}
            {/*    </TriggerText>*/}

            {/*    <TriggerText threshold=".5" delay=".9">*/}
            {/*      <h2*/}
            {/*        data-scroll*/}
            {/*        data-scroll-speed="1"*/}
            {/*        data-scroll-direction="horizontal"*/}
            {/*      ><span>creativity</span></h2>*/}

            {/*    </TriggerText>*/}

            {/*    <TriggerImg delay={1}>*/}
            {/*      <img*/}
            {/*        data-scroll*/}
            {/*        data-scroll-speed="-1"*/}
            {/*        data-scroll-position="top"*/}
            {/*        className="orbit" width="80%" src={orbitMain} alt="" />*/}
            {/*    </TriggerImg>*/}
            {/*    <TriggerImg delay={1.5}>*/}
            {/*      <img*/}
            {/*        data-scroll*/}
            {/*        data-scroll-speed="2"*/}
            {/*        data-scroll-position="top" className="small-star" width="50" src={smallStar} alt="" />*/}
            {/*    </TriggerImg>*/}
            {/*    <div className="scroll-down">*/}
            {/*      <TriggerImg delay={1.2}>*/}
            {/*        <img width="100" className="index-hand" src={handDown} alt="" />*/}
            {/*      </TriggerImg>*/}
            {/*    </div>*/}

            {/*  </div>*/}
            {/*</section>*/}


            <section className="section-main-container">
              <TriggerText threshold=".5" delay="3.7">

                <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                                secondTapeScroll={true} thirdTapeScroll={true} fourthTapeScroll={false} dataScrollPosition="top" dataScrollSpeed="-10" />

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

              <div className="bg-dots">
                <div className="item item-1"></div>
              </div>

              <div className="new-subsec-body">
                <div className="subsec-span-wprapper">
                  {/*<img className="rotating-star" src={smallStar}*/}
                  {/*     alt="Lumina Studio" />*/}
                  <div className="star"></div>
                  <TriggerText threshold=".5" delay=".5">
                    <span className="subsec-span">Why we do what we do</span>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".5">
                  <p>
                    Brooklyn man bun intelligentsia selfies shaman, meggings  godard slow-carb flannel. Ramps
                    church-key umami dreamcatcher  jean chips next level brooklyn marfa VHS bitters scen. <em> palo  before they sold out.</em>
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
                  <div> </div>
                  <TriggerText threshold=".5" delay=".5">
                    <p>DIY actually cardigan post-ironic fashion axe enamel pin. IPhone pop-up la croix salvia hell of
                      franze kale chips shoreditch deep v venmo pok pok you
                      probably haven't heard of them. Tumeric tacos you probably haven't heard of them twee kinfolk green
                      juice. Cliche typewriter narwhal fixie.</p>
                  </TriggerText>
                </div>

                <div className="mt-5">
                  <div></div>
                  <TriggerText threshold=".5" delay=".5">
                    <p>Meh health goth whatever bushwick knausgaard, gentrify lumbersexual helvetica squid YOLO brunch.
                      Venmo occupy lumbersexual cliche.
                    </p>

                  </TriggerText>


                  {/*<TriggerText threshold=".5" delay=".8">*/}
                  {/*  <p>IPhone pop-up la croix salvia hell of franzenly haven't heard of them. </p>*/}
                  {/*</TriggerText>*/}
                </div>
              </div>

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
                  <div className="service-title">
                    <h5>Design</h5>
                    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                  </div>
                  <div className="service-title">
                    <h5>Branding</h5>
                    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                  </div>
                  <div className="service-title">
                    <h5>Digital</h5>
                    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                  </div>
                </div>
                <div>
                  <div className="service-title">
                    <h5>Ecommerce</h5>
                    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                  </div>
                  <div className="service-title">
                    <h5>Web development</h5>
                    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                  </div>
                  <div className="service-title">
                    <h5>Social media</h5>
                    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                  </div>
                </div>
                <div>
                  <div className="service-title">
                    <h5>Strategy</h5>
                    <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                  </div>
                </div>

              </div>



            </section>

            <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                            secondTapeScroll={false} thirdTapeScroll={false}  dataScrollPosition="bottom" dataScrollSpeed="6"/>

            <section className="new-index-projects">


              <div className="bg-dots">
                <div className="item item-1"></div>
              </div>

              <div className="subsec-header">
                <TriggerText threshold=".5" delay=".5">
                  <h2 className="subsec-title">Some Instagram profiles <br/> to keep an eye on</h2>
                </TriggerText>
                <TriggerText threshold=".5" delay=".5">
                  <span className="">02.</span>
                </TriggerText>
              </div>

              {/*<div className="projects-wrapper">*/}
              {/*  <h5>Carra <span>2020</span></h5>*/}
              {/*  <h5>Radca Tomczak <span>2021</span></h5>*/}
              {/*  <h5>Adwokat Mikulak <span>2020</span></h5>*/}
              {/*  <h5>Malva <span>2019</span></h5>*/}
              {/*  <h5>Tomasz Elsner <span>2019</span></h5>*/}
              {/*  <h5>Latyński <span>2019</span></h5>*/}
              {/*  <h5>Drewstal <span>2020</span></h5>*/}
              {/*</div>*/}

              <IndexProjects/>

              <div className="projects-btn">
                <div className="service-title">
                  <h5>Sprawdź więcej projektów</h5>
                  <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
                </div>
              </div>

            </section>


            {/*<ProjectsSubsectionNew />*/}

            <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                            secondTapeScroll={true} thirdTapeScroll={false}  dataScrollPosition="top" dataScrollSpeed="4" />



            {/*<div className="test break-out"></div>*/}


            <section className="index-process">

              {/*<div className="new-subsec-body">*/}
              {/*  <div className="subsec-span-wprapper"><img className="rotating-star" src={smallStar}*/}
              {/*                                             alt="Lumina Studio" /> <span className="subsec-span">Why we do what we do</span>*/}
              {/*  </div>*/}
              {/*  <TriggerText threshold=".5" delay=".5">*/}
              {/*    <p>*/}
              {/*      Tacos neutra green juice YOLO. Succulents artisan keytar beard fanny pack gentrify. Copper mug man bun*/}
              {/*      hella, lyft craft beer occupy put a bird on it drinking. <em> vinegar chambray.</em>*/}
              {/*    </p>*/}
              {/*  </TriggerText>*/}
              {/*</div>*/}


              <div className="subsec-header">
                <TriggerText threshold=".5" delay=".5">
                  <h2 className="subsec-title">Artykuły</h2>
                  <br/>
                  <p>Zapoznaj się z artykułami</p>
                </TriggerText>
                <TriggerText threshold=".5" delay=".5">
                  <span className="">03.</span>
                </TriggerText>
              </div>

              <section className="services-page-slider break-out">
                <ArticlesSlider/>
              </section>

              {/*<div className="process-wrapper">*/}
              {/*  <div className="single-square"></div>*/}
              {/*  <div className="single-square"></div>*/}
              {/*  <div className="single-square"></div>*/}
              {/*  <div className="single-square"></div>*/}
              {/*  <div className="single-square"></div>*/}
              {/*  <div className="single-square"></div>*/}
              {/*</div>*/}

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


            <ContactSubsec/>


            <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                            secondTapeScroll={true}  fourthTapeScroll={true}
                            thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />


            {/*<Worldwide />*/}

            <LowerFooter />


          </motion.div>



        </main>
        {/*<div className="site-loader in"></div>*/}

      </LocomotiveScrollProvider>

    </>
  )
}
// ...GatsbyImageSharpFluid

export default HomePage
