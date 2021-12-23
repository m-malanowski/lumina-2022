import React, { useRef } from "react"
import { graphql } from "gatsby"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SectionMarquee from "../components/SectionMarquee"
import { Helmet } from "react-helmet"
import TriggerImg from "../components/TriggerImg"
// ...GatsbyImageSharpFluid
import TriggerText from "../components/TriggerText"
import Worldwide from "../components/Worldwide"
import LowerFooter from "../components/LowerFooter"
import arrow from "../assets/icons/right-arrow.svg"
import ContactSubsec from "../components/ContactSubsec"
import Foooter from "../components/Foooter"
import MainBtn from "../components/MainBtn"
import SEO from "../components/SEO"

const ProjectTemplate = ({ data }) => {
  const containerRef = useRef(null)
  // const image = getImage(data.project.media)
  return (
    <>
      <Helmet bodyAttributes={{
        id: "single-project-page"
      }} />
      <SEO title="LUMINA STUDIO | Realizacje"
           description="Jesteśmy Kreatywną Agencją Interaktywną,  ☎ 506 870 672 ☎  Specjalizujemy Się W Tworzeniu Stron Internetowych Oraz Brandingu"
        // schemaMarkup={schema}
      />
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            getDirection: true
          }
        }
        watch={
          []
        }
        containerRef={containerRef}
      >

        <main className="single-project-page container-fluid" data-scroll-container ref={containerRef}>
          {/*<TriggerImg delay={1}>*/}
          {/*  <img*/}
          {/*    data-scroll*/}
          {/*    data-scroll-speed="-2"*/}
          {/*    data-scroll-position="top"*/}
          {/*    className="orbit" width="1000" src={orbitSingleProject} alt="" />*/}
          {/*</TriggerImg>*/}
          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={false}  fourthTapeScroll={false}
                          thirdTapeScroll={false}
                          subSectionMarqueeTitle={true}
                          title={data.project.title}
                          dataScrollPosition="bottom" dataScrollSpeed="2" />

          <div className="subsec-header">
            {/*<h5 className="">01.</h5>*/}
            {/*<h2 className="subsec-title">{data.project.title}</h2>*/}




            {/*<TriggerText threshold=".5" delay=".1">*/}
            {/*  <h2*/}
            {/*    data-scroll*/}
            {/*    data-scroll-speed="1"*/}
            {/*  >{data.project.title}</h2>*/}
            {/*</TriggerText>*/}

          </div>

          <div className="subsec-body">
            <TriggerText threshold=".25" delay=".1">
              <p className="project-services">{data.project.services}</p>
            </TriggerText>
            <div className="subsec-desc">
              <TriggerText threshold=".25" delay=".15">
                <p>{data.project.desc}</p>
                <MainBtn title="Strona www"/>

              </TriggerText>
            </div>
            <TriggerText threshold=".25" delay=".2">
              <span>{data.project.date}</span>
            </TriggerText>
          </div>


          <div className="single-project-body break-out">
            {/*<TriggerImg delay="1">*/}
              <div className="imgs-wrapper">

                {data.project.media.map(imgy => (
                  <TriggerImg delay=".25">

                    <div key={imgy.id}>
                      {/*<GatsbyImage image={image} alt="elo elo" />*/}
                      <img key={imgy.id}
                           className="" width="900" src={imgy.url} alt=""
                           data-scroll
                           data-scroll-speed="1"

                      />
                    </div>

                  </TriggerImg>

                ))}

              </div>
            {/*</TriggerImg>*/}

          </div>

          {/*<ContactSubsec/>*/}
          {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}*/}
          {/*                secondTapeScroll={true}*/}
          {/*                thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />*/}
          {/*<LowerFooter />*/}


          <Foooter/>


        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      desc
      services
      date(formatString: "MMMM YYYY", locale: "pl")
      media {
        url
      }   
    }
  }
`
export default ProjectTemplate
