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

const ProjectTemplate = ({ data }) => {
  const containerRef = useRef(null)
  // const image = getImage(data.project.media)

  return (
    <>
      <Helmet bodyAttributes={{
        id: "single-project-page"
      }} />

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

          <div className="subsec-header">
            {/*<h5 className="">01.</h5>*/}
            {/*<h2 className="subsec-title">{data.project.title}</h2>*/}

            <TriggerText threshold=".5" delay=".1">
              <h2
                data-scroll
                data-scroll-speed="1"
              >{data.project.title}</h2>
            </TriggerText>

          </div>

          <div className="subsec-body">
            <TriggerText threshold=".5" delay=".2">
              <p>{data.project.services}</p>
            </TriggerText>
            <div className="subsec-desc">
              <TriggerText threshold=".5" delay=".25">
                <p>{data.project.desc}</p>
              </TriggerText>
            </div>
            <TriggerText threshold=".5" delay=".3">
              <span>{data.project.date}</span>
            </TriggerText>
          </div>

          <div className="single-project-body break-out">
            <TriggerImg delay="1">
              <div className="imgs-wrapper">

                {data.project.media.map(imgy => (
                  <div key={imgy.id}>
                    {/*<GatsbyImage image={image} alt="elo elo" />*/}
                    <img key={imgy.id}
                         className="" width="900" src={imgy.url} alt="" />
                  </div>
                ))}

              </div>
            </TriggerImg>

          </div>


          {/*<ContactSubsec/>*/}
          {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}*/}
          {/*                secondTapeScroll={true}*/}
          {/*                thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />*/}
          {/*<LowerFooter />*/}

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
