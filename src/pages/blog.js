import React, { useRef } from "react"
import ArticlesSlider from "../components/ArticlesSlider"
// import { graphql } from "gatsby"
import LowerFooter from "../components/LowerFooter"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import TriggerImg from "../components/TriggerImg"
import orbitAboutPage from "../assets/icons/orbitBlogPage.svg"
import SEO from "../components/SEO"
import arrow from "../assets/icons/right-arrow.svg"
import smallStar from "../assets/icons/smallStar.svg"

// ...GatsbyImageSharpFluid

const Blog = () => {
  const containerRef = useRef(null)

  return (
    <>
      <SEO title="LUMINA STUDIO | Blog"
           description="Jesteśmy Kreatywną Agencją Interaktywną,  ☎ 506 870 672 ☎  Specjalizujemy Się W Tworzeniu Stron Internetowych Oraz Brandingu"
        // schemaMarkup={schema}
      />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
      <main className="blog-page container-fluid"  data-scroll-container ref={containerRef}>
        {/*<div className="page-content">*/}

        {/*  <div className="subsec-header">*/}
        {/*    <h5 className="">01.</h5>*/}
        {/*    <h2 className="subsec-title">Blog</h2>*/}
        {/*  </div>*/}


        {/*  <div className="subsec-body">*/}
        {/*    /!*<div className="ss-body-first"/>*!/*/}
        {/*    <div className="ss-body-second">*/}
        {/*      <p>Iceland hell of XOXO post-ironic, next level skateboard scenester cornhole tacos distillery. Slow-carb tofu wolf, <em> ennui gastropub four</em> dollar toast direct trade narwhal post-ironic blog tilde fanny pack disrupt. Fingerstache you probably haven't heard of them synth 90's.</p>*/}
        {/*      <span>Things we made</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="scroll-down-pages">*/}
        {/*    <img width="100" src={arrowDown} alt="" />*/}
        {/*    /!*<img width="150" src={handDown} alt="" />*!/*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<section className="services-page-slider break-out">*/}
        {/*  <ArticlesSlider/>*/}
        {/*</section>*/}

        {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}*/}
        {/*                thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>*/}
        {/*<Worldwide/>*/}

        <section className="section-blog-container">
          <div className="main-container">

            <TriggerText threshold=".5" delay=".2">
              <h2>Blog</h2>
            </TriggerText>

            {/*<TriggerImg delay={1}>*/}
            {/*  <img*/}
            {/*    data-scroll*/}
            {/*    data-scroll-speed="1"*/}
            {/*    data-scroll-position="top"*/}
            {/*    className="orbit-blog" width="60%" src={orbitAboutPage} alt="" />*/}
            {/*</TriggerImg>*/}
          </div>
        </section>

        <section className="blog-page-subsec-wrapper">
          <div className="new-subsec-body">
            <div className="subsec-span-wprapper">
              <img className="rotating-star" src={smallStar}
                   alt="Lumina Studio" />
              <TriggerText threshold=".5" delay=".5">
                <span className="subsec-span">Why we do what we do</span>
              </TriggerText>
            </div>
            <TriggerText threshold=".5" delay=".5">
              <p>
                Brooklyn man bun intelli ale chips next level brooklyn marfa VHS bitters scenester
                palo santo before they sold out.
              </p>
            </TriggerText>
          </div>
        </section>


        <div className="blog-wrapper">
          <div className="blog-table">
            <div className="article">
              <div>
                <h5>Web development</h5>
                <h2>Pour-over actually</h2>
              </div>
              <img src={arrow} alt="" width="28px" className="ml-2" />
            </div>

            <div className="article">
              <div>
                <h5>Category</h5>
                <h2> Post-ironic umami </h2>
              </div>
              <img src={arrow} alt="" width="28px" className="ml-2 " />
            </div>

            <div className="article">
              <div>
                <h5>Programowanie</h5>
                <h2>Helvetica tattooed seitan vinyl taiyaki iPhone</h2>
              </div>
              <img src={arrow} alt="" width="28px" className="ml-2 " />
            </div>

            <div className="article">
              <div>
                <h5>Design</h5>
                <h2>Actually waistcoat organic woke narwhal </h2>
              </div>
              <img src={arrow} alt="" width="28px" className="ml-2 " />
            </div>

            <div className="article">
              <div>
                <h5>SEO</h5>
                <h2>Tacos neutra green juice </h2>
              </div>
              <img src={arrow} alt="" width="28px" className="ml-2 " />
            </div>

            <div className="article">
              <div>
                <h5>SEO</h5>
                <h2>iPhone organic green waistcoat </h2>
              </div>
              <img src={arrow} alt="" width="28px" className="ml-2 " />
            </div>

          </div>
        </div>


        <div className="projects-btn">
          <div className="service-title">
            <h5>Wczytaj więcej</h5>
            <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
          </div>
        </div>


        {/*<section className="services-page-slider break-out">*/}
        {/*  <ArticlesSlider/>*/}
        {/*</section>*/}

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        <Worldwide />
        <LowerFooter />

      </main>
      </LocomotiveScrollProvider>
    </>
  )
}

export default Blog
