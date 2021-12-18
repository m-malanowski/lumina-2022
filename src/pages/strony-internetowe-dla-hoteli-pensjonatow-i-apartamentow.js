import React, { useRef, useState, useEffect } from "react"
import LowerFooter from "../components/LowerFooter"
import orbitAboutPage from "../assets/icons/orbitAboutPage.svg"
import arrow from "../assets/icons/right-arrow.svg"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import serviceStickersSmall from "../assets/icons/serviceStickersSmall.svg"
import SEO from "../components/SEO"

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
      <SEO title="LUMINA STUDIO | Strony Internetowe Dla Hoteli i Pensjonatów"
           description="LUMINA STUDIO | Agencja Interaktywna"
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

          <section className="about-page-process">
            <div className="subsec-header">

              <TriggerText threshold=".5" delay=".35">
                <h5 className="">01.</h5>
              </TriggerText>
              <TriggerText threshold=".5" delay=".45">
                <h2 className="subsec-title">Nasza <br /> Misja</h2>
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

              <motion.div
                className="about-process-single-bottom">
                <div className="pt-1 pb-5">
                  <div className="">
                    <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                      dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                      vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                      intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                      humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                      vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                  </div>
                </div>
              </motion.div>
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

              <motion.div
                className="about-process-single-bottom">
                <div className="pt-1 pb-5 ">
                  <div className="">
                    {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                    {/*<br />*/}
                    <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                      dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                      vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                      intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                      humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                      vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                  </div>
                </div>
              </motion.div>
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

              <motion.div
                className="about-process-single-bottom">
                <div className="pt-1 pb-5 ">
                  <div className="">
                    {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                    {/*<br />*/}
                    <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                      dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                      vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                      intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                      humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                      vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                  </div>
                </div>
              </motion.div>
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

              <motion.div
                className="about-process-single-bottom">
                <div className="pt-1 pb-5 ">
                  <div className="">
                    {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                    {/*<br />*/}
                    <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                      dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                      vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                      intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                      humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                      vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                  </div>
                </div>
              </motion.div>
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

              <motion.div
                className="about-process-single-bottom">
                <div className="pt-1 pb-5 ">
                  <div className="">
                    {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                    {/*<br />*/}
                    <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                      dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                      vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                      intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                      humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                      vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
                  </div>
                </div>
              </motion.div>
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

              <motion.div
                className="about-process-single-bottom">
                <div className="pt-1 pb-5 ">
                  <div className="">
                    {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                    {/*<br />*/}
                    <p> Z nami nie muszą Państwo martwić się o niewywiązanie się z terminu podczas wykonywania zlecenia.
                      Możesz skontaktować się z nami bezpośrednio, o każdej porze dnia i nocy. Przykładamy bardzo dużą uwagę do długofalowych relacji, opartych na wzajemnym zaufaniu.
                      Zawsze wywiązujemy się z umowy. Wybierając naszą firmę mają Państwo pewność inwestycji w projekt, który przyniesie zysk.
                    </p>
                  </div>
                </div>
              </motion.div>

              <TriggerLine threshold=".5" delay=".25">
                <hr className="animated last" />
              </TriggerLine>

            </div>
          </section>


          <TriggerImg threshold="0" delay={1}>
            <img
              className="service-stickers" width="100%" src={serviceStickers} alt="" />

            <img
              className="service-stickers-small " width="100%" src={serviceStickersSmall} alt="" />

          </TriggerImg>


          <section className="section-main-works mt-5">
            <div>
              <div className="subsec-header">
                <TriggerText threshold=".5" delay=".1">
                  <h5 className="">02.</h5>
                </TriggerText>
                <TriggerText threshold=".5" delay=".1">
                  <h2 className="subsec-title">Proces</h2>
                </TriggerText>
              </div>

              <div className="subsec-body">
                <div className="ss-body-second">
                  <TriggerText threshold="0" delay=".6">
                    <p>Z nami nie muszą Państwo martwić się o niewywiązanie się z terminu podczas wykonywania zlecenia.
                      Możesz skontaktować się z nami bezpośrednio, o każdej porze dnia i nocy. Wybierając <em>Lumina Studio</em> mają Państwo pewność inwestycji w projekt, który przyniesie zysk.</p>
                  </TriggerText>
                  <TriggerText threshold="0" delay=".35">
                    <span className="subsec-span">Jak działamy</span>
                  </TriggerText>
                </div>
              </div>

              <div className="main-about-services">
                <div className="single-service">
                  <TriggerLine threshold=".5" delay=".5">
                    <hr className="animated" />
                  </TriggerLine>

                  <TriggerText threshold=".5" delay="1.0">
                    <h3>Proces I</h3>
                  </TriggerText>
                  <TriggerText threshold=".5" delay="1.2">
                    <p>
                      Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie
                      elementy identyfikacji wizualnej były spójne ze sobą jak również odzwierciedlały branżę lub
                      sprzedawany produkt.
                    </p>
                  </TriggerText>
                </div>
                <div className="single-service">
                  <TriggerLine threshold=".5" delay=".5">
                    <hr className="animated" />
                  </TriggerLine>
                  <TriggerText threshold=".5" delay="1.0">
                    <h3>Proces II</h3>
                  </TriggerText>
                  <TriggerText threshold=".5" delay="1.2">
                    <p>
                      W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania
                      responsywnych stron internetowych.
                      Realizujemy projekty dla klientów korporacyjnych oraz małych firm.
                      Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania
                      treścią.
                    </p>
                  </TriggerText>
                </div>
                <div className="single-service">
                  <TriggerLine threshold=".5" delay=".5">
                    <hr className="animated" />
                  </TriggerLine>
                  <TriggerText threshold=".5" delay="1.0">
                    <h3>Proces III</h3>
                  </TriggerText>
                  <TriggerText threshold=".5" delay="1.2">
                    <p>
                      Zajmujemy się tworzeniem profesjonalnych sklepów internetowych, dopracowanych pod względem
                      mechanizmów sprzedażowych. Tworzone przez nas sklepy internetowe oparte są wyłącznie o
                      sprawdze, a przy tym niezawodne, rozwiązania e-commerce.
                    </p>
                  </TriggerText>
                </div>
                <div className="single-service">
                  <TriggerLine threshold=".5" delay=".5">
                    <hr className="animated" />
                  </TriggerLine>
                  <TriggerText threshold=".5" delay="1.0">
                    <h3>Proces IV</h3>
                  </TriggerText>
                  <TriggerText threshold=".5" delay="1.2">
                    <p>
                      Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie.
                      Idealnym rozwiązaniem są kampanie Google Ads, Facebook oraz pozycjonowanie stron
                      internetowych.
                    </p>
                  </TriggerText>
                </div>
              </div>

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
