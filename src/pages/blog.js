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
import ContactSubsec from "../components/ContactSubsec"
import Foooter from "../components/Foooter"
import trueStar from "../assets/icons/true-star.svg"
import ProjectsSubsectionNew from "../components/ProjectsSubsectionNew"

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

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                        secondTapeScroll={false} fourthTapeScroll={false}
                        thirdTapeScroll={false}
                        subSectionMarqueeTitle={true}
                        title="Blog"
                        dataScrollPosition="bottom" dataScrollSpeed="2" />

        {/*<section className="blog-page-subsec-wrapper">*/}
        {/*  <div className="new-subsec-body">*/}
        {/*    <div className="subsec-span-wprapper">*/}
        {/*      <img className='rotating-star' src={trueStar} width={30} alt="" />*/}

        {/*      <TriggerText threshold=".5" delay=".5">*/}
        {/*        <span className="subsec-span">Why we do what we do</span>*/}
        {/*      </TriggerText>*/}
        {/*    </div>*/}
        {/*    <TriggerText threshold=".5" delay=".5">*/}
        {/*      <p>*/}
        {/*        Brooklyn man bun intelli ale chips next level brooklyn marfa VHS bitters scenester*/}
        {/*        palo santo before they sold out.*/}
        {/*      </p>*/}
        {/*    </TriggerText>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <ProjectsSubsectionNew/>



        {/*<div className="blog-wrapper">*/}
        {/*  <div className="blog-table">*/}
        {/*    <div className="article">*/}
        {/*      <div>*/}
        {/*        <h5>Web development</h5>*/}
        {/*        <h2>Pour-over actually</h2>*/}
        {/*      </div>*/}
        {/*      <img src={arrow} alt="" width="28px" className="ml-2" />*/}
        {/*    </div>*/}
        
        {/*    <div className="article">*/}
        {/*      <div>*/}
        {/*        <h5>Category</h5>*/}
        {/*        <h2> Post-ironic umami </h2>*/}
        {/*      </div>*/}
        {/*      <img src={arrow} alt="" width="28px" className="ml-2 " />*/}
        {/*    </div>*/}
        
        {/*    <div className="article">*/}
        {/*      <div>*/}
        {/*        <h5>Programowanie</h5>*/}
        {/*        <h2>Helvetica tattooed seitan vinyl taiyaki iPhone</h2>*/}
        {/*      </div>*/}
        {/*      <img src={arrow} alt="" width="28px" className="ml-2 " />*/}
        {/*    </div>*/}
        
        {/*    <div className="article">*/}
        {/*      <div>*/}
        {/*        <h5>Design</h5>*/}
        {/*        <h2>Actually waistcoat organic woke narwhal </h2>*/}
        {/*      </div>*/}
        {/*      <img src={arrow} alt="" width="28px" className="ml-2 " />*/}
        {/*    </div>*/}
        
        {/*    <div className="article">*/}
        {/*      <div>*/}
        {/*        <h5>SEO</h5>*/}
        {/*        <h2>Tacos neutra green juice </h2>*/}
        {/*      </div>*/}
        {/*      <img src={arrow} alt="" width="28px" className="ml-2 " />*/}
        {/*    </div>*/}
        
        {/*    <div className="article">*/}
        {/*      <div>*/}
        {/*        <h5>SEO</h5>*/}
        {/*        <h2>iPhone organic green waistcoat </h2>*/}
        {/*      </div>*/}
        {/*      <img src={arrow} alt="" width="28px" className="ml-2 " />*/}
        {/*    </div>*/}
        
        {/*  </div>*/}
        {/*</div>*/}



        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                        secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />
        <Foooter />

      </main>
      </LocomotiveScrollProvider>
    </>
  )
}

export default Blog
