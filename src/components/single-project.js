import React, { useRef } from "react"
import Footer from "./Footer"
import orbitSingleProject from "../assets/icons/orbitContact.svg"

import Layout from "./Layout"
import { graphql } from "gatsby"
import Blogs from "./Blogs"
import LowerFooter from "./LowerFooter"
import malva from "../assets/imgs/Kopelat/1.png"
import malva2 from "../assets/imgs/Kopelat/2.png"
import malva3 from "../assets/imgs/Kopelat/3.png"
import malva4 from "../assets/imgs/Kopelat/4.png"
import malva5 from "../assets/imgs/Kopelat/5.png"

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import arrowDown from "../assets/icons/arrowDown.svg"
import arrow from "../assets/icons/right-arrow.svg"
import orbitMain from "../assets/icons/orbitMainView.png"
import Worldwide from "./Worldwide"
import SectionMarquee from "./SectionMarquee"
import { Helmet } from "react-helmet"
import TriggerImg from "./TriggerImg"
// ...GatsbyImageSharpFluid


const Blog = () => {

  const containerRef = useRef(null)

  return (
    <>
      <Helmet bodyAttributes={{
        id: 'single-project-page'
      }}   />

      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            getDirection: true,
          }
        }
        watch={
          [

          ]
        }
        containerRef={containerRef}
      >


      <main className="single-project-page container-fluid"  data-scroll-container ref={containerRef}>

        <TriggerImg delay={1}>
          <img
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="top"
            className="orbit" width="1000" src={orbitSingleProject} alt="" />
        </TriggerImg>

          <div className="subsec-header">
            {/*<h5 className="">01.</h5>*/}
            <h2 className="subsec-title">Carra</h2>
          </div>

          <div className="subsec-body">
            <div>
              <p>Webdesign, branding</p>
            </div>
            <div className="subsec-desc">
              <p>Butcher keytar truffaut, artisan pitchfork meditation activated charcoal hexagon mumblecore try-hard palo santo quinoa brunch. Shabby chic pinterest marfa letterpress fanny pack truffaut, four loko scenester hexagon raw denim kinfolk gentrify. Tote bag flexitarian roof party shoreditch, sriracha offal direct trade listicle echo park pop-up enamel pin artisan mlkshk glossier. </p>
            </div>
            <div>
              <span>02/2021</span>
            </div>
          </div>

          {/*<div className="single-project-body">*/}
          {/*  <div className="subsec-header">*/}
          {/*    <h5 className="">01.</h5>*/}
          {/*    <h2 className="subsec-title">Główny widok</h2>*/}
          {/*  </div>*/}
          {/*  <img className="" width="900" src={malva} alt="" />*/}

          {/*  <div className="subsec-header">*/}
          {/*    <h5 className="">02.</h5>*/}
          {/*    <h2 className="subsec-title">ONas</h2>*/}
          {/*  </div>*/}
          {/*  <img className="" width="900" src={malva2} alt="" />*/}
          {/*</div>*/}

          <div className="single-project-body">
            <div className="imgs-wrapper">

              <img className="" width="900" src={malva3} alt=""
                   data-scroll
                   data-scroll-speed="-2"
                   // data-scroll-direction="horizontal"
              />
              <img className="" width="900" src={malva2} alt=""
                   data-scroll
                   data-scroll-speed="-2"
                   // data-scroll-direction="horizontal"
              />
              <img className="" width="900" src={malva4} alt=""
                   data-scroll
                   data-scroll-speed="-2"
                   // data-scroll-direction="horizontal"
              />

              <img className="" width="900" src={malva5} alt=""
                   data-scroll
                   data-scroll-speed="-1"
                // data-scroll-direction="horizontal"
              />
              <img className="" width="900" src={malva} alt=""
                   data-scroll
                   data-scroll-speed="-2"
                // data-scroll-direction="horizontal"
              />
              <img className="" width="900" src={malva3} alt=""
                   data-scroll
                   data-scroll-speed="-2"
                // data-scroll-direction="horizontal"
              />
              <img className="" width="900" src={malva2} alt=""
                   data-scroll
                   data-scroll-speed="-2"
                // data-scroll-direction="horizontal"
              />
            </div>

          </div>


          <section className="section-more-projects">
            <div className="subsec-header">
              <h5 className="">03.</h5>
              <h2 className="subsec-title">Więcej <br/> projektów</h2>
            </div>

            <div className="more-projects-single mt-5">
              <div className="more-left">
                <span>2019</span>
                <h5>Antyegzekucja</h5>
              </div>
              <p className="more-right"> Webdesign, Banding </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2020</span>
                <h5>Carra</h5>
              </div>
              <p className="more-right"> Webdesign, Strategy </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2020</span>
                <h5>Radca prawny tomczak</h5>
              </div>
              <p className="more-right"> Webdesign, Branding </p>
            </div>

            <div className="more-projects-single ">
              <div className="more-left">
                <span>2021</span>
                <h5>Antyegzekucja</h5>
              </div>
              <p className="more-right"> Webdesign  </p>
            </div>

            {/*<div className="learn-more">*/}
            {/*  <a href="/portfolio">*/}
            {/*    <span>Sprawdź</span>*/}
            {/*    <span/>*/}
            {/*    <span>Więcej</span>*/}
            {/*  </a>*/}
            {/*</div>*/}

          </section>


        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>


      </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export default Blog
