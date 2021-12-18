import React, { useRef, useState, useEffect } from "react"
import LowerFooter from "../components/LowerFooter"
import orbitAboutPage from "../assets/icons/orbitAboutPage.svg"
import arrow from "../assets/icons/right-arrow.svg"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import serviceStickersSmall from "../assets/icons/serviceStickersSmall.svg"

import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import { motion } from "framer-motion"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import TriggerLine from "../components/TriggerLine"
import { gsap } from "gsap";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

// ...GatsbyImageSharpFluid
const ONas = () => {

  const containerRef = useRef(null)

  return (
    <>
      {/*<SEO title="LUMINA STUDIO | Agencja Interaktywna"*/}
      {/*     description="LUMINA STUDIO | Agencja Interaktywna"*/}
      {/*     // schemaMarkup={schema}*/}
      {/*/>*/}
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
        <main className="about-page container-fluid"   data-scroll-container ref={containerRef}>

          <section className="section-about-container">
            <div className="main-container">

              <TriggerText threshold=".5" delay=".2">
                <h2
                  data-scroll
                  data-scroll-speed="-3"
                  data-scroll-direction="horizontal"
                >Idziemy</h2>
              </TriggerText>

              <TriggerText threshold=".5" delay=".3">
                <span
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-direction="horizontal"> z </span>
                <h2
                  data-scroll
                  data-scroll-speed="-1"
                  data-scroll-direction="horizontal">duchem</h2>
              </TriggerText>

              <TriggerText threshold=".5" delay=".35">
                <h2
                  data-scroll
                  data-scroll-speed="3"
                  data-scroll-direction="horizontal"
                >Czasu</h2>
              </TriggerText>


              <TriggerImg delay={1}>
                <img
                  data-scroll
                  data-scroll-speed="-2"
                  data-scroll-position="top"
                  className="orbit-about" width="75%" src={orbitAboutPage} alt="" />
              </TriggerImg>

            </div>
          </section>

          <section>
            <div className="">
              <div className="subsec-body">
                <div className="ss-body-first">
                </div>
                <div className="ss-body-second">
                  <TriggerText threshold="0" delay=".5">
                    <p> Nasza agencja specjializuję się w tworzeniu aplikacji internetowych oraz <em> identyfikacji wizualnej </em> dla firm.
                      Przykładamy dużą uwagę do długofalowych relacji, opartych na wzajemnym zaufaniu.
                    </p>
                  </TriggerText>

                  <TriggerText threshold="0" delay=".35">
                    <span className="subsec-span">Lumina Studio</span>
                  </TriggerText>
                </div>
              </div>
            </div>
          </section>

          <section className="section-main-works">

            <div className="main-works-container">
              <div className="single-work">
                <div>
                  <h5>01.</h5>
                  <h3>Web development</h3>
                </div>
                <div>
                  <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>

                </div>
              </div>

              <div className="single-work">
                <div>
                  <h5>02.</h5>
                  <h3>Branding</h3>
                </div>
                <div>
                  <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>

                </div>
              </div>

              <div className="single-work">
                <div>
                  <h5>03.</h5>
                  <h3>Design</h3>
                </div>
                <div>
                  <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>

                </div>
              </div>

              <div className="single-work">
                <div>
                  <h5>04.</h5>
                  <h3>Strategy</h3>
                </div>
                <div>
                  <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>

                </div>
              </div>
            </div>

          </section>


          <section className="about-page-process">
            <div className="subsec-header">

              <TriggerText threshold=".5" delay=".35">
                <h5 className="">01.</h5>
              </TriggerText>
              <TriggerText threshold=".5" delay=".45">
                <h2 className="subsec-title">Pozostałe <br /> Usługi</h2>
              </TriggerText>
            </div>

            <div className="about-process-single mt-5">
              <div className="about-process-single-top"
              >
                <div
                  className="about-process-single-top__inner"/>

                <TriggerLine threshold=".5" delay=".5">
                  <hr className="animated" />
                </TriggerLine>

                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>01.</span>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".4">
                  <p >Gochujang letterpress poutine</p>
                </TriggerText>
                <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                  <img
                    width="30"
                    src={arrow} alt="" />
                </TriggerText>

              </div>

            </div>

            <div className="about-process-single">
              <div className="about-process-single-top">
                <div className="about-process-single-top__inner"/>

                <TriggerLine threshold=".5" delay=".25">
                  <hr className="animated" />
                </TriggerLine>

                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>02.</span>
                  </TriggerText>

                </div>

                <TriggerText threshold=".5" delay=".35">
                  <p >Migas meditation </p>
                </TriggerText>

                <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                  <img
                    width="30"
                    src={arrow} alt="" />
                </TriggerText>
              </div>

            </div>

            <div className="about-process-single">
              <div className="about-process-single-top">
                <div className="about-process-single-top__inner"/>

                <TriggerLine threshold=".5" delay=".25">
                  <hr className="animated" />
                </TriggerLine>

                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>03.</span>
                  </TriggerText>
                </div>

                <TriggerText threshold=".5" delay=".35">
                  <p >polaroid banh mi tbh</p>
                </TriggerText>

                <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                  <img
                    width="30"
                    src={arrow} alt="" />
                </TriggerText>

              </div>

            </div>

            <div className="about-process-single">
              <div className="about-process-single-top">
                <div className="about-process-single-top__inner"/>


                <TriggerLine threshold=".5" delay=".25">
                  <hr className="animated" />
                </TriggerLine>

                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>04.</span>
                  </TriggerText>
                </div>

                <TriggerText threshold=".5" delay=".35">
                  <p >Hashtag tousled ethical</p>
                </TriggerText>

                <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                  <img
                    width="30"
                    src={arrow} alt="" />
                </TriggerText>

              </div>

            </div>

            <div className="about-process-single">
              <div className="about-process-single-top">
                <div className="about-process-single-top__inner"/>


                <TriggerLine threshold=".5" delay=".25">
                  <hr className="animated" />
                </TriggerLine>

                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>05.</span>
                  </TriggerText>

                </div>

                <TriggerText threshold=".5" delay=".35">
                  <p >sold out vice</p>
                </TriggerText>

                <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                  <img
                    width="30"
                    src={arrow} alt="" />
                </TriggerText>

              </div>

            </div>

            <div className="about-process-single">
              <div className="about-process-single-top">
                <div className="about-process-single-top__inner"/>

                <TriggerLine threshold=".5" delay=".25">
                  <hr className="animated" />
                </TriggerLine>

                <div>
                  <TriggerText threshold=".5" delay=".35">
                    <span>06.</span>
                  </TriggerText>
                </div>

                <TriggerText threshold=".5" delay=".35">
                  <p >bitters intelligentsia</p>
                </TriggerText>

                <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                  <img
                    width="30"
                    src={arrow} alt="" />
                </TriggerText>
              </div>

              <TriggerLine threshold=".5" delay=".25">
                <hr className="animated last" />
              </TriggerLine>

            </div>
          </section>


          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                          thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

          <Worldwide />

          <LowerFooter />

        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export default ONas
