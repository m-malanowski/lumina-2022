import React, { useRef, useState, useEffect } from "react"
import SEO from "../components/SEO"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import { motion } from "framer-motion"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import TriggerLine from "../components/TriggerLine"
import { gsap } from "gsap"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import smallStar from "../assets/icons/smallStar.svg"
import memoji from "../assets/imgs/emoji.png"
import ArticlesSlider from "../components/ArticlesSlider"
import ContactSubsec from "../components/ContactSubsec"
import AboutSectionAccordion from "../components/AboutSectionAccordion"
import { Link } from "gatsby"
import Foooter from "../components/Foooter"
import trueStar from "../assets/icons/true-star.svg"


// ...GatsbyImageSharpFluid
const ONas = () => {

  const containerRef = useRef(null)

  return (
    <>
      <SEO title="LUMINA STUDIO | O NAS"
           description="Jesteśmy Kreatywną Agencją Interaktywną,  ☎ 506 870 672 ☎  Specjalizujemy Się W Tworzeniu Stron Internetowych Oraz Brandingu"
        // schemaMarkup={schema}
      />
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
        <main className="about-page container-fluid" data-scroll-container ref={containerRef}>

          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={false} fourthTapeScroll={false}
                          thirdTapeScroll={false}
                          subSectionMarqueeTitle={true}
                          title="O nas"
                          dataScrollPosition="bottom" dataScrollSpeed="2" />


          {/*<section className="about cta-section">*/}
          {/*  <h2>Let's partner up!</h2>*/}
          {/*  <p>Send us an email with a brief description of your <br/> company and*/}
          {/*    suggestions on our future cooperation </p>*/}

          {/*  <div className="stars-wrapper">*/}
          {/*    <div className="star star-one"></div>*/}
          {/*    <div className="star star-two"></div>*/}
          {/*    <div className="star star-three"></div>*/}
          {/*  </div>*/}
          {/*</section>*/}
          {/*<Worldwide />*/}

          <section className="about-welcome-subsec">


            {/*<div className="">*/}
            {/*  <div className="subsec-body">*/}
            {/*    <div className="ss-body-first">*/}
            {/*    </div>*/}
            {/*    <div className="ss-body-second">*/}
            {/*      <TriggerText threshold="0" delay=".5">*/}
            {/*        <p> Nasza agencja specjializuję się w tworzeniu aplikacji internetowych oraz <em> identyfikacji wizualnej </em> dla firm.*/}
            {/*          Przykładamy dużą uwagę do długofalowych relacji, opartych na wzajemnym zaufaniu.*/}
            {/*        </p>*/}
            {/*        </TriggerText>*/}

            {/*      <TriggerText threshold="0" delay=".35">*/}
            {/*        <span className="subsec-span">Lumina Studio</span>*/}
            {/*      </TriggerText>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="new-subsec-body">
              <div className="subsec-span-wprapper">

                <TriggerImg threshold="1" delay=".4">
                  {/*<div className="star"></div>*/}
                  <img className='rotating-star' src={trueStar} width={30} alt="" />
                </TriggerImg>

                <TriggerText threshold="1" delay=".5">
                  <span className="subsec-span">Why we do what we do</span>
                </TriggerText>
              </div>
              <TriggerText threshold=".5" delay=".7">
                <p>
                  Tacos neutra green juice YOLO. Succu lents artisan keytar beard fanny pack gentrify. Lyft craf ta it
                  drin king. <em> vinegar chambray</em>
                </p>
              </TriggerText>
            </div>
          </section>

          <section className="section-main-works mt-5">
            <div>

              {/*<div className="main-about-services">*/}
              {/*  <div className="single-service">*/}
              {/*    <TriggerLine threshold=".5" delay=".5">*/}
              {/*      <hr className="animated" />*/}
              {/*    </TriggerLine>*/}

              {/*    <TriggerText threshold=".5" delay="1.0">*/}
              {/*      <h3>Proces I</h3>*/}
              {/*    </TriggerText>*/}
              {/*    <TriggerText threshold=".5" delay="1.2">*/}
              {/*      <p>*/}
              {/*        Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie*/}
              {/*        elementy identyfikacji wizualnej były spójne ze sobą jak również odzwierciedlały branżę lub*/}
              {/*        sprzedawany produkt.*/}
              {/*      </p>*/}
              {/*    </TriggerText>*/}
              {/*  </div>*/}
              {/*  <div className="single-service">*/}
              {/*    <TriggerLine threshold=".5" delay=".5">*/}
              {/*      <hr className="animated" />*/}
              {/*    </TriggerLine>*/}
              {/*    <TriggerText threshold=".5" delay="1.0">*/}
              {/*      <h3>Proces II</h3>*/}
              {/*    </TriggerText>*/}
              {/*    <TriggerText threshold=".5" delay="1.2">*/}
              {/*      <p>*/}
              {/*        W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania*/}
              {/*        responsywnych stron internetowych.*/}
              {/*        Realizujemy projekty dla klientów korporacyjnych oraz małych firm.*/}
              {/*        Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania*/}
              {/*        treścią.*/}
              {/*      </p>*/}
              {/*    </TriggerText>*/}
              {/*  </div>*/}
              {/*  <div className="single-service">*/}
              {/*    <TriggerLine threshold=".5" delay=".5">*/}
              {/*      <hr className="animated" />*/}
              {/*    </TriggerLine>*/}
              {/*    <TriggerText threshold=".5" delay="1.0">*/}
              {/*      <h3>Proces III</h3>*/}
              {/*    </TriggerText>*/}
              {/*    <TriggerText threshold=".5" delay="1.2">*/}
              {/*      <p>*/}
              {/*        Zajmujemy się tworzeniem profesjonalnych sklepów internetowych, dopracowanych pod względem*/}
              {/*        mechanizmów sprzedażowych. Tworzone przez nas sklepy internetowe oparte są wyłącznie o*/}
              {/*        sprawdze, a przy tym niezawodne, rozwiązania e-commerce.*/}
              {/*      </p>*/}
              {/*    </TriggerText>*/}
              {/*  </div>*/}
              {/*  <div className="single-service">*/}
              {/*    <TriggerLine threshold=".5" delay=".5">*/}
              {/*      <hr className="animated" />*/}
              {/*    </TriggerLine>*/}
              {/*    <TriggerText threshold=".5" delay="1.0">*/}
              {/*      <h3>Proces IV</h3>*/}
              {/*    </TriggerText>*/}
              {/*    <TriggerText threshold=".5" delay="1.2">*/}
              {/*      <p>*/}
              {/*        Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie.*/}
              {/*        Idealnym rozwiązaniem są kampanie Google Ads, Facebook oraz pozycjonowanie stron*/}
              {/*        internetowych.*/}
              {/*      </p>*/}
              {/*    </TriggerText>*/}
              {/*  </div>*/}
              {/*</div>*/}


              <div className="main-works-container">

                <div className="bg-dots">
                  <div className="item item-1"></div>
                  <div className="item item-2"></div>
                </div>

                <TriggerText threshold=".25" delay=".25">
                  <div className="single-work"
                       data-scroll
                       data-scroll-speed="-1"
                  >
                    <div>
                      {/*<h5>01.</h5>*/}
                      <h3>Web development</h3>
                    </div>
                    <div>
                      <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies
                        farm-to-table <em>asymmetrical</em> vice fashion axe tacos pug helvetica. Tote bag before they
                        sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la
                        croix microdosing.
                      </p>
                    </div>

                  </div>
                </TriggerText>

                <TriggerText threshold=".25" delay=".25">
                  <div className="single-work"
                       data-scroll
                       data-scroll-speed="-1.4">
                    <div>
                      <h5>02.</h5>
                      <h3>Branding</h3>
                    </div>
                    <div>
                      <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice
                        fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck
                        chillwave copper mug quinoa poke bitters. <em>Brooklyn</em> la croix microdosing.</p>

                    </div>
                  </div>
                </TriggerText>

                <TriggerText threshold=".25" delay=".25">
                  <div className="single-work"
                       data-scroll
                       data-scroll-speed="-1.8">
                    <div>
                      <h5>03.</h5>
                      <h3>Design</h3>
                    </div>
                    <div>
                      <p>Gluten-free skateboard table asymmetrical vice fashion axe tacos pug helvetica. Tote
                        bag <em>before</em> they sold out bespoke, health goth food truck chillwave copper mug quinoa
                        poke bitters. Brooklyn la croix microdosing.</p>
                    </div>
                  </div>
                </TriggerText>

                <TriggerText threshold=".25" delay=".25">
                  <div className="single-work"
                       data-scroll
                       data-scroll-speed="-2.2">
                    <div>
                      <h5>04.</h5>
                      <h3>Strategy</h3>
                    </div>
                    <div>
                      <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice
                        fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck
                        chillwave copper mug quinoa poke bitters. <em>Brooklyn la croix microdosing.</em></p>
                    </div>
                  </div>
                </TriggerText>

              </div>
            </div>
          </section>

          <Worldwide />

          <section className="articles-subsection">
            <div className="subsec-header">
              <TriggerText threshold=".25" delay=".25">
                <h2 className="subsec-title">Artykuły</h2>
                <br />
                <p>Zapoznaj się z artykułami</p>
              </TriggerText>
              <TriggerText threshold=".25" delay=".25">
                <span className="">03.</span>
              </TriggerText>
            </div>

            <section className="services-page-slider break-out">
              <TriggerText threshold=".25" delay=".3">
                <ArticlesSlider />
              </TriggerText>
            </section>
          </section>

          {/*<AboutSectionAccordion/>*/}

          <ContactSubsec />
          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                          secondTapeScroll={true}
                          thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />
          <Foooter />

          {/*<LowerFooter />*/}

        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export default ONas
