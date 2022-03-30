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
import StickyServices from "../components/StickyServices"
import LowerFooter from "../components/LowerFooter"
// import arrow from "../assets/icons/right-arrow.svg"
import motive from "../assets/icons/motive.svg"
import BreakoutMarquee from "../components/BreakoutMarquee"
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
import GlobeWithStars from "../components/GlobeWithStars"
import SuperNewIndexProjects from "../components/SuperNewIndexProjects"
import sparkle from "../assets/icons/sparkle.png"
import Process from "../components/Process"
import logo from "../assets/logo.svg"
// import elo4 from "../assets/imgs/elo4.webp"
import elo4 from "../assets/imgs/3.png"
import stars from "../assets/imgs/stars.svg"
import heart from "../assets/icons/heart.svg"
import chrome from "../assets/imgs/chrome2.png"
import arrowCircle from "../assets/icons/arrow-in-circle.svg"
import arrow from "../assets/icons/arrow-in-circle.svg"
import bg from "../assets/imgs/bg.jpg"
import SkewImages from "../components/SkewImages"
import AboutSectionAccordion from "../components/AboutSectionAccordion"

const HomePage = ({ data }) => {

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
        <div className="noise-holder">
          <div className="noise"></div>
        </div>

        <main className="index-page container-fluid" data-scroll-container ref={containerRef}>


          <motion.div className="index-page">

            <div className="baba">
              {/*<div className="stars-wrapper">*/}
              {/*  <div className="star star-one"></div>*/}
              {/*  <div className="star star-two"></div>*/}
              {/*  <div className="star star-three"></div>*/}
              {/*</div>*/}
              <p>
                Everything <br />
                you <em>need</em> to know <br />
                about

                {/*Uwolnij <br/>*/}
                {/*potencjał <br/>*/}
                {/*swojej marki*/}
              </p>

              <Link to="/kontakt" className="mt-5 test-btn">Rozpocznij projekt</Link>

            </div>

            <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                            secondTapeScroll={true} thirdTapeScroll={true} dataScrollPosition="top"
                            className="main-view"
                            dataScrollSpeed="4" />

            {/*<Worldwide isGlobe={false} />*/}


            <section className="index-about">
              <div className="bg-dots index">
                <div className="item item-1" data-scroll data-scroll-speed="-2"></div>
                <div className="item item-2" data-scroll data-scroll-speed="-1"></div>
              </div>

              <div className="new-subsec-body">
                <TriggerText threshold=".45" delay=".25"
                             data-scroll
                             data-scroll-speed="-.5">
                  <p className="subsec-body__description">
                    Brooklyn man bun intelligentsia selfies shaman, flannel. Ramps
                    church-key umami dream catcher jean chips <em>next level brooklyn</em> mafia VHS bitters scen.
                  </p>
                </TriggerText>
              </div>

              <section className="test-section">

                <div>
                  <img src={arrowCircle} alt="" width="80px"
                       className="align-self-end service__img test-section__img mt-1" />
                  {/*<div className="stars-wrapper">*/}
                  {/*  <div className="star star-one"></div>*/}
                  {/*  <div className="star star-two"></div>*/}
                  {/*  <div className="star star-three"></div>*/}
                  {/*</div>*/}
                </div>
                <TriggerText threshold=".45" delay=".35"
                             data-scroll
                             data-scroll-speed="-.5"
                >
                  <h2>Once again Ranboo defies the odds with the 2k21 Ranboo collection. </h2>
                </TriggerText>

                <TriggerText threshold=".45" delay=".45"
                             data-scroll
                             data-scroll-speed="-.5"
                >
                  <h2 className="mb-5">A collection of bad ideas come to fruition as real products for you to
                    experience.
                    <br /><br />
                    The collection contains a range of products designed to emulate his signature black and white style.
                    With the Ranboo collection, you can take a bad idea and make it your own.
                  </h2>
                </TriggerText>
              </section>
              {/*<img width="100%" src={chrome} alt="Lumina Studio - Agencja Interaktywna" />*/}

              <SkewImages />

              {/*<Worldwide isGlobe={false} />*/}

              <section className="about-description-wrapper">

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
                    >Meh health goth whatever bushwick knausgaard, gentrify lumbersexual helvetica
                      squid <em>YOLO</em> brunch.
                      Venmo occupy lumbersexual cliche.
                    </p>
                  </TriggerText>

                  {/*<TriggerText threshold=".5" delay=".8">*/}
                  {/*<p>IPhone pop-up la croix salvia hell of franzenly haven't heard of them. </p>*/}
                  {/*</TriggerText>*/}
                </div>
              </section>

            </section>

            {/*<Process />*/}
            <Worldwide />

            <div className="new-subsec-body">
              <TriggerText threshold=".45" delay=".25"
                           data-scroll
                           data-scroll-speed="-.5">
                <p className="subsec-body__description">
                  Brooklyn man bun intelligentsia selfies shaman, flannel. Ramps
                  church-key umami dream catcher jean chips <em>next level brooklyn</em> mafia VHS bitters scen.
                </p>
              </TriggerText>
            </div>
            <Process/>
            <GlobeWithStars />

            {/*<StickyServices/>*/}
            {/*<AboutSectionAccordion/>*/}



            {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}*/}
            {/*                secondTapeScroll={true} thirdTapeScroll={true} fourthTapeScroll={false}*/}
            {/*                dataScrollPosition="center" dataScrollSpeed="-10" />*/}


            {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}*/}
            {/*                secondTapeScroll={false} thirdTapeScroll={false} dataScrollPosition="bottom"*/}
            {/*                dataScrollSpeed="6" />*/}

            {/*<section className="new-index-projects">*/}
            {/*  <TriggerImg delay={.5} threshold={0}>*/}
            {/*    <div className="globe-stars-wrapper stars-wrapper">*/}
            {/*      <img className="globe mb-5" width="125" src={globe} alt="Agencja interaktywna lumina studio" />*/}
            {/*      <div className="star star-one"></div>*/}
            {/*      <div className="star star-two"></div>*/}
            {/*      <div className="star star-three"></div>*/}
            {/*    </div>*/}
            {/*  </TriggerImg>*/}
            {/*</section>*/}

            {/*<BreakoutMarquee/>*/}
            <SuperNewIndexProjects />
            {/*<Worldwide />*/}
            <GlobeWithStars />

            {/*<div className="new-subsec-body">*/}
            {/*  <TriggerText threshold=".45" delay=".25"*/}
            {/*               data-scroll*/}
            {/*               data-scroll-speed="-.5">*/}
            {/*    <p className="subsec-body__description">*/}
            {/*      Brooklyn man bun intelligentsia selfies shaman, flannel. Ramps*/}
            {/*      church-key umami dream catcher jean chips <em>next level brooklyn</em> mafia VHS bitters scen.*/}
            {/*    </p>*/}
            {/*  </TriggerText>*/}
            {/*</div>*/}
            {/*<Process/>*/}
            {/*<GlobeWithStars />*/}
            {/*<BreakoutMarquee/>*/}

            <ArticlesSlider />
            <ContactSubsec />

            <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                            secondTapeScroll={true} fourthTapeScroll={false}
                            thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />

            <Foooter />

          </motion.div>

        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export const query = graphql`
{
  allStrapiProjects {
    nodes {
      id
      title
      slug
      services
      cover{
        url
                 localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
      }
      date
      desc
    }
  }
}
`
export default HomePage
