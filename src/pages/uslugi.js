import React, { useRef } from "react"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import serviceStickersSmall from "../assets/icons/serviceStickersSmall.svg"
import SEO from "../components/SEO"
import AboutSectionAccordion from "../components/AboutSectionAccordion"
import ArticlesSlider from "../components/ArticlesSlider"
import ContactSubsec from "../components/ContactSubsec"
import Foooter from "../components/Foooter"
import globe from "../assets/icons/globe.svg"

const Uslugi = () => {

  const containerRef = useRef(null)

  return (
    <>
      <SEO title="LUMINA STUDIO | Usługi"
           description="Zadzwoń I Umów Się Na Bezpłatną Konultację. Tel. 506 870 672. Sklepy internetowe. Projektowanie I Tworzenie Sklepów Internetowych, Profesjonalny Sklep Internetowy"
        // schemaMarkup={schema}
      />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <main className="services-page container-fluid" data-scroll-container ref={containerRef}>

          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={false} fourthTapeScroll={false}
                          thirdTapeScroll={false}
                          subSectionMarqueeTitle={true}
                          title="Usługi"
                          dataScrollPosition="bottom" dataScrollSpeed="2" />


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


          {/*<img className="service-stickers" width="100%" src={serviceStickers} alt="Lumina Studio Usługi" />*/}
          {/*<img className="service-stickers-small " width="100%" src={serviceStickersSmall} alt="Lumina Studio Usługi" />*/}

          <TriggerImg delay={.5} threshold={0}>
            <div className="globe-stars-wrapper stars-wrapper">
              <img className="globe mb-5" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
              <div className="star star-one"></div>
              <div className="star star-two"></div>
              <div className="star star-three"></div>
            </div>
          </TriggerImg>


          <section className="about-page-process">

            {/*<div className="new-subsec-body">*/}
            {/*  <div className="subsec-span-wprapper">*/}

            {/*    <TriggerImg>*/}
            {/*      <div className="star"></div>*/}
            {/*    </TriggerImg>*/}

            {/*    <TriggerText threshold=".5" delay=".5">*/}
            {/*      <span className="subsec-span">Why we do what we do</span>*/}
            {/*    </TriggerText>*/}
            {/*  </div>*/}
            {/*  <TriggerText threshold=".5" delay=".5">*/}
            {/*    <p>*/}
            {/*      Brooklyn man bun intelli gentsia aes marfa VHS bi selfies lorem sha man, megg ings godard slow-carb flannel. Ramps*/}
            {/*      church-key umami dreamca tcher jean chips next level broo klyn marfa VHS bitters scen. Pezo Pezo właśnie tak <em> palo*/}
            {/*      before they sold out.</em>*/}
            {/*    </p>*/}
            {/*  </TriggerText>*/}

            {/*</div>*/}

            <AboutSectionAccordion />


          </section>

          {/*<Worldwide />*/}

          <img className="service-stickers" width="100%" src={serviceStickers} alt="Lumina Studio Usługi" />
          <img className="service-stickers-small " width="100%" src={serviceStickersSmall} alt="Lumina Studio Usługi" />


          <ArticlesSlider />

          {/*<AboutSectionAccordion/>*/}

          <ContactSubsec />

          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={true} fourthTapeScroll={false}
                          thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />

          <Foooter />
          {/*<LowerFooter/>*/}

        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export default Uslugi
