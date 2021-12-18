import React, { useRef } from "react"
import { graphql, Link } from "gatsby"
import arrow from "../assets/icons/right-arrow.svg"
import LowerFooter from "../components/LowerFooter"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import TriggerLine from "../components/TriggerLine"
import TriggerImg from "../components/TriggerImg"
// import smallStar from "../assets/icons/smallStar.svg"
import orbitAboutPage from "../assets/icons/orbitPortfolioPage.svg"
import orbitMoreSection from "../assets/icons/orbitMoreSection.svg"
import SEO from "../components/SEO"
import orbitProcess from "../assets/icons/orbitProcess.png"
import smallStar from "../assets/icons/smallStar.svg"
import IndexProjects from "../components/IndexProjects"

// ...GatsbyImageSharpFluid
const AgencjaInteraktywnaRealizacje = ({ data }) => {

  const containerRef = useRef(null)
  // const image = getImage(data.project.cover)

  return (
    <>
      <SEO title="LUMINA STUDIO | Agencja Interaktywna - Realizacje"
           description="Jesteśmy Kreatywną Agencją Interaktywną,  ☎ 506 870 672 ☎  Specjalizujemy Się W Tworzeniu Stron Internetowych Oraz Brandingu"
        // schemaMarkup={schema}
      />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >

        <main className="works-page container-fluid" data-scroll-container ref={containerRef}>
          <div className="works-page-container">

            <TriggerText threshold=".5" delay="1">
              <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                              secondTapeScroll={false}  fourthTapeScroll={false}
                              thirdTapeScroll={false}
                              subSectionMarqueeTitle={true}
                              title="Realizacje"
                              dataScrollPosition="bottom" dataScrollSpeed="2" />
            </TriggerText>

            {/*<section className="section-portfolio-container">*/}
            {/*  <div className="main-container">*/}

            {/*    <TriggerText threshold=".5" delay=".2">*/}
            {/*      <h2>Realizacje</h2>*/}
            {/*    </TriggerText>*/}

            {/*    /!*<TriggerImg delay={1}>*!/*/}
            {/*    /!*  <img*!/*/}
            {/*    /!*    data-scroll*!/*/}
            {/*    /!*    data-scroll-speed="1"*!/*/}
            {/*    /!*    data-scroll-position="top"*!/*/}
            {/*    /!*    className="orbit-blog" width="60%" src={orbitAboutPage} alt="" />*!/*/}
            {/*    /!*</TriggerImg>*!/*/}
            {/*  </div>*/}
            {/*</section>*/}

            <TriggerImg threshold="" delay="1">

              <div className="new-section-works-container">
                {data.allStrapiProjects.nodes.map(node => (

                  // <TriggerImg threshold="" delay="1">
                  <div style={{ backgroundImage: `url(${node.cover.url})` }}>
                    <Link to={"/agencja-interaktywna-realizacje/" + node.slug}>
                      <div>
                        <h2>{node.title}</h2>
                        <p>{node.services}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </TriggerImg>

            {/*<IndexProjects/>*/}

          </div>

          <section className="cta-section">
            <h2>Let's partner up!</h2>
            <p>Send us an email with a brief description of your <br/> company and
              suggestions on our future cooperation </p>

            <div className="service-title">
              <h5>Dowiedz się więcej</h5>
              <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
            </div>

            <div className="stars-wrapper">
              <div className="star star-one"></div>
              <div className="star star-two"></div>
              <div className="star star-three"></div>
            </div>
          </section>


          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                          secondTapeScroll={true}
                          thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />

          <Worldwide />

          <LowerFooter />

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

export default AgencjaInteraktywnaRealizacje
