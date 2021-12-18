import React, { useRef, useState, useEffect } from "react"
import LowerFooter from "../components/LowerFooter"
import orbitAboutPage from "../assets/imgs/orbit-about.svg"
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
import smallStar from "../assets/icons/smallStar.svg"
import memoji from "../assets/imgs/emoji.png"

// ...GatsbyImageSharpFluid
const ONas = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)
  // let background = useRef(null);


  const transition = { delay: .1, duration: .4, ease: [0.6, 0.01, -0.05, 0.9] }
  const variantsPlus = {
    open: { rotate: 90, opacity: 1 },
    closed: { opacity: 1 },
    hover: { opacity: .95 }
  }
  const variantsDesc1 = {
    open: { opacity: 1, height: "auto", visibility: "visible" },
    closed: { opacity: 0, height: 0, visibility: "hidden" }
  }

  const handleHover = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -23,
      skewX: 4,
      ease: "power1.inOut"
    });
  };

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
      <main className="about-page container-fluid"   data-scroll-container ref={containerRef}>

        {/*<section className="section-about-container">*/}
        {/*  <div className="main-container">*/}

        {/*      <TriggerText threshold=".5" delay=".2">*/}
        {/*        <h2*/}
        {/*          data-scroll*/}
        {/*          data-scroll-speed="-3"*/}
        {/*          data-scroll-direction="horizontal"*/}
        {/*        >Idziemy</h2>*/}
        {/*      </TriggerText>*/}

        {/*      <TriggerText threshold=".5" delay=".3">*/}
        {/*        <h2*/}
        {/*          data-scroll*/}
        {/*          data-scroll-speed="-1"*/}
        {/*          data-scroll-direction="horizontal">z duchem</h2>*/}
        {/*      </TriggerText>*/}

        {/*    <TriggerText threshold=".5" delay=".35">*/}
        {/*      <h2*/}
        {/*        data-scroll*/}
        {/*        data-scroll-speed="3"*/}
        {/*        data-scroll-direction="horizontal"*/}
        {/*      ><span>Czasu</span></h2>*/}
        {/*    </TriggerText>*/}

        {/*    /!*<TriggerImg delay={1}>*!/*/}
        {/*    /!*  <img*!/*/}
        {/*    /!*    data-scroll*!/*/}
        {/*    /!*    data-scroll-speed="-2"*!/*/}
        {/*    /!*    data-scroll-position="top"*!/*/}
        {/*    /!*    className="orbit-about" width="65%" src={orbitAboutPage} alt="Lumina Studio" />*!/*/}
        {/*    /!*</TriggerImg>*!/*/}

        {/*    <img className="dupa" src={memoji} alt="" width='700px' />*/}

        {/*  </div>*/}
        {/*</section>*/}


        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                        secondTapeScroll={false}  fourthTapeScroll={false}
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
              {/*<img className="rotating-star" src={smallStar}*/}
              {/*                                         alt="Lumina Studio" />*/}
              <div className="star"></div>
              <span className="subsec-span">Why we do what we do</span>
            </div>
            <TriggerText threshold=".5" delay=".5">
              <p>
                Tacos neutra green juice YOLO. Succulents artisan keytar beard fanny pack gentrify. Copper mug man bun
                hella, lyft craft beer occupy put a bird on it drinking. <em> vinegar chambray</em>
              </p>
            </TriggerText>
          </div>
        </section>




        <section className="about-page-process">
          <div className="subsec-header">
            <TriggerText threshold=".5" delay=".45">
              <h2 className="subsec-title">Nasza Misja</h2>
              {/*<p>Lorem ipsum, veniam!</p>*/}
            </TriggerText>
            <TriggerText threshold=".5" delay=".35">
              <h5 className="">01.</h5>
            </TriggerText>
          </div>

          <div className="about-process-single mt-5">
            <div className="about-process-single-top"
                 // ref={el => (background = el)}
                 // onMouseEnter={e => handleHover(e)}
            >
              <div
                   // ref={el => (background = el)}
                   // onMouseEnter={e => handleHover(e)}
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
                <p onClick={() => setIsOpen1(!isOpen1)}>Gochujang letterpress poutine</p>
              </TriggerText>
              <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                <motion.img
                  animate={isOpen1 ? "open" : "closed"}
                  variants={variantsPlus}
                  transition={transition}
                  onClick={() => setIsOpen1(!isOpen1)}
                  whileHover="hover"
                  width="30"
                  src={arrow} alt="" />
              </TriggerText>

            </div>

            <motion.div
              animate={isOpen1 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
              className="about-process-single-bottom">
              <div className="pt-1 pb-5">
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
                  <span>02.</span>
                </TriggerText>
              </div>

              <TriggerText threshold=".5" delay=".35">
                <p onClick={() => setIsOpen2(!isOpen2)}>Migas meditation </p>
              </TriggerText>

              <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                <motion.img
                  animate={isOpen2 ? "open" : "closed"}
                  variants={variantsPlus}
                  transition={transition}
                  onClick={() => setIsOpen2(!isOpen2)}
                  whileHover="hover"
                  width="30"
                  src={arrow} alt="" />
              </TriggerText>
            </div>

            <motion.div
              animate={isOpen2 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
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
                <p onClick={() => setIsOpen3(!isOpen3)}>polaroid banh mi tbh</p>
              </TriggerText>

              <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                <motion.img
                  animate={isOpen3 ? "open" : "closed"}
                  variants={variantsPlus}
                  transition={transition}
                  onClick={() => setIsOpen3(!isOpen3)}
                  whileHover="hover"
                  width="30"
                  src={arrow} alt="" />
              </TriggerText>

            </div>

            <motion.div
              animate={isOpen3 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
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
                <p onClick={() => setIsOpen4(!isOpen4)}>Hashtag tousled ethical</p>
              </TriggerText>

              <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                <motion.img
                  animate={isOpen4 ? "open" : "closed"}
                  variants={variantsPlus}
                  transition={transition}
                  onClick={() => setIsOpen4(!isOpen4)}
                  whileHover="hover"
                  width="30"
                  src={arrow} alt="" />
              </TriggerText>

            </div>

            <motion.div
              animate={isOpen4 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
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
                <p onClick={() => setIsOpen5(!isOpen5)}>sold out vice</p>
              </TriggerText>

              <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                <motion.img
                  animate={isOpen5 ? "open" : "closed"}
                  variants={variantsPlus}
                  transition={transition}
                  onClick={() => setIsOpen5(!isOpen5)}
                  whileHover="hover"
                  width="30"
                  src={arrow} alt="" />
              </TriggerText>

            </div>

            <motion.div
              animate={isOpen5 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
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
                <p onClick={() => setIsOpen6(!isOpen6)}>bitters intelligentsia</p>
              </TriggerText>

              <TriggerText threshold=".5" delay="1.2" cName="img-wrapper">
                <motion.img
                  animate={isOpen6 ? "open" : "closed"}
                  variants={variantsPlus}
                  transition={transition}
                  onClick={() => setIsOpen6(!isOpen6)}
                  whileHover="hover"
                  width="30"
                  src={arrow} alt="" />
              </TriggerText>
            </div>

            <motion.div
              animate={isOpen6 ? "open" : "closed"}
              // initial={{display: 'none'}}
              variants={variantsDesc1}
              transition={transition}
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


        {/*<section className="section-main-about">*/}
        {/*  <div className="main-about-container">*/}
        {/*    <div className="subsec-header">*/}
        {/*      <TriggerText threshold=".5" delay=".5">*/}
        {/*        <h5 className="">01.</h5>*/}
        {/*      </TriggerText>*/}
        {/*      <TriggerText threshold=".5" delay=".5">*/}
        {/*        <h2 className="subsec-title">Proces</h2>*/}
        {/*      </TriggerText>*/}
        {/*      <img*/}
        {/*        data-scroll*/}
        {/*        data-scroll-speed="1"*/}
        {/*        className="small-star" width="35" src={smallLuminaStar} alt="" />*/}
        {/*    </div>*/}
        {/*    <div className="subsec-body">*/}
        {/*      <div className="ss-body-first">*/}
        {/*        <TriggerImg>*/}
        {/*          <img*/}
        {/*            data-scroll*/}
        {/*            data-scroll-speed="-1"*/}
        {/*            data-scroll-position="top"*/}
        {/*            className="orbit" width="800" src={orbitAbout} alt="" />*/}
        {/*        </TriggerImg>*/}
        {/*      </div>*/}
        {/*      <div className="ss-body-second">*/}
        {/*        <TriggerText threshold=".2" delay=".5">*/}
        {/*          <p>*/}
        {/*            Jako zespół specjalistów w swojej branży wiemy, że spójny wizerunek i obecność w sieci to  obowiązkaowy*/}
        {/*            element w dzisiejszym świecie  dla skutecznego rozwoju każdej firmy.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}

        {/*        <TriggerText threshold=".2" delay=".35">*/}
        {/*          <span className="subsec-span">Jak działamy</span>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="main-about-services">*/}
        {/*      <div className="single-service">*/}
        {/*        <TriggerLine threshold=".5" delay=".5">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}

        {/*        <TriggerText threshold=".5" delay="1.0">*/}
        {/*          <h3>Branding</h3>*/}
        {/*        </TriggerText>*/}
        {/*        <TriggerText threshold=".5" delay="1.2">*/}
        {/*          <p>*/}
        {/*            Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie*/}
        {/*            elementy identyfikacji wizualnej były spójne ze sobą jak również odzwierciedlały branżę lub*/}
        {/*            sprzedawany produkt.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*      <div className="single-service">*/}
        {/*        <TriggerLine threshold=".5" delay=".5">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*        <TriggerText threshold=".5" delay="1.0">*/}
        {/*          <h3>Web <br /> dev</h3>*/}
        {/*        </TriggerText>*/}
        {/*        <TriggerText threshold=".5" delay="1.2">*/}
        {/*          <p>*/}
        {/*            W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania*/}
        {/*            responsywnych stron internetowych.*/}
        {/*            Realizujemy projekty dla klientów korporacyjnych oraz małych firm.*/}
        {/*            Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania*/}
        {/*            treścią.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*      <div className="single-service">*/}
        {/*        <TriggerLine threshold=".5" delay=".5">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*        <TriggerText threshold=".5" delay="1.0">*/}
        {/*          <h3>Digital</h3>*/}
        {/*        </TriggerText>*/}
        {/*        <TriggerText threshold=".5" delay="1.2">*/}
        {/*          <p>*/}
        {/*            Zajmujemy się tworzeniem profesjonalnych sklepów internetowych, dopracowanych pod względem*/}
        {/*            mechanizmów sprzedażowych. Tworzone przez nas sklepy internetowe oparte są wyłącznie o*/}
        {/*            sprawdze, a przy tym niezawodne, rozwiązania e-commerce.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*      <div className="single-service">*/}
        {/*        <TriggerLine threshold=".5" delay=".5">*/}
        {/*          <hr className="animated" />*/}
        {/*        </TriggerLine>*/}
        {/*        <TriggerText threshold=".5" delay="1.0">*/}
        {/*          <h3>Social <br /> media</h3>*/}
        {/*        </TriggerText>*/}
        {/*        <TriggerText threshold=".5" delay="1.2">*/}
        {/*          <p>*/}
        {/*            Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie.*/}
        {/*            Idealnym rozwiązaniem są kampanie Google Ads, Facebook oraz pozycjonowanie stron*/}
        {/*            internetowych.*/}
        {/*          </p>*/}
        {/*        </TriggerText>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}




        {/*<TriggerImg threshold="0" delay={1}>*/}
        {/*  <img*/}
        {/*    // data-scroll*/}
        {/*    // data-scroll-speed="-1"*/}
        {/*    // data-scroll-position="bottom"*/}
        {/*    className="service-stickers" width="100%" src={serviceStickers} alt="" />*/}
        {/*</TriggerImg>*/}



            {/*<TriggerImg threshold="0" delay={1}>*/}
            {/*  <img*/}
            {/*    data-scroll*/}
            {/*    data-scroll-speed="-1"*/}
            {/*    // data-scroll-position="bottom"*/}
            {/*    className="service-stickers" width="100%" src={serviceStickers} alt="" />*/}
            {/*</TriggerImg>*/}




        {/*<section className="section-about-container">*/}
        {/*  <div className="main-container">*/}

        {/*    <TriggerText threshold=".5" delay=".2">*/}
        {/*      <h2>Step</h2>*/}
        {/*    </TriggerText>*/}

        {/*    <TriggerText threshold=".5" delay=".25">*/}
        {/*      <span>into</span>*/}
        {/*      <h2>Van</h2>*/}
        {/*    </TriggerText>*/}

        {/*    <TriggerText threshold=".5" delay=".3">*/}
        {/*      <h2>Gogh's</h2>*/}
        {/*    </TriggerText>*/}

        {/*    <TriggerText threshold=".5" delay=".35">*/}
        {/*      <h2>World</h2>*/}
        {/*    </TriggerText>*/}

        {/*  </div>*/}
        {/*</section>*/}

        {/*<TriggerImg threshold="0" delay={1}>*/}
        {/*  <img*/}
        {/*    // data-scroll*/}
        {/*    // data-scroll-speed="-1"*/}
        {/*    // data-scroll-position="bottom"*/}
        {/*    className="service-stickers" width="100%" src={serviceStickers} alt="" />*/}
        {/*</TriggerImg>*/}

        {/*<section className="about-page-process">*/}
        {/*  <div className="subsec-header">*/}

        {/*    <TriggerText threshold=".5" delay=".35">*/}
        {/*      <h5 className="">02.</h5>*/}
        {/*    </TriggerText>*/}
        {/*    <TriggerText threshold=".5" delay=".45">*/}
        {/*      <h2 className="subsec-title">Nasze <br /> Usługi</h2>*/}
        {/*    </TriggerText>*/}
        {/*  </div>*/}

        {/*  <div className="about-page-services">*/}
        {/*    <div className="about-single">*/}
        {/*      <div className="about-single-left">*/}
        {/*        <img className="small-star" width="150" src={aboutServiceStar1} alt="" />*/}
        {/*      </div>*/}
        {/*      <div className="about-single-right">*/}
        {/*        <div>*/}
        {/*          <span>01.</span>*/}
        {/*          <h3>Web dev</h3>*/}
        {/*        </div>*/}
        {/*        <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo*/}
        {/*          edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac*/}
        {/*          stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo*/}
        {/*          kickstarter XOXO. Skateboard kombucha waistcoat. </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="about-single">*/}
        {/*      <div className="about-single-left">*/}
        {/*        <img className="small-star" width="150" src={aboutServiceStar2} alt="" />*/}
        {/*      </div>*/}
        {/*      <div className="about-single-right">*/}
        {/*        <div>*/}
        {/*          <span>02.</span>*/}
        {/*          <h3>Web dev</h3>*/}
        {/*        </div>*/}
        {/*        <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo*/}
        {/*          edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac*/}
        {/*          stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo*/}
        {/*          kickstarter XOXO. Skateboard kombucha waistcoat. </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="about-single">*/}
        {/*      <div className="about-single-left">*/}
        {/*        <img className="small-star" width="150" src={aboutServiceStar1} alt="" />*/}
        {/*      </div>*/}
        {/*      <div className="about-single-right">*/}
        {/*        <div>*/}
        {/*          <span>03.</span>*/}
        {/*          <h3>Web dev</h3>*/}
        {/*        </div>*/}
        {/*        <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo*/}
        {/*          edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac*/}
        {/*          stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo*/}
        {/*          kickstarter XOXO. Skateboard kombucha waistcoat. </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="about-single">*/}
        {/*      <div className="about-single-left">*/}
        {/*        <img className="small-star" width="150" src={aboutServiceStar2} alt="" />*/}
        {/*      </div>*/}
        {/*      <div className="about-single-right">*/}
        {/*        <div>*/}
        {/*          <span>04.</span>*/}
        {/*          <h3>Web dev</h3>*/}
        {/*        </div>*/}
        {/*        <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo*/}
        {/*          edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac*/}
        {/*          stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo*/}
        {/*          kickstarter XOXO. Skateboard kombucha waistcoat. </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="about-single">*/}
        {/*      <div className="about-single-left">*/}
        {/*        <img className="small-star" width="150" src={aboutServiceStar1} alt="" />*/}
        {/*      </div>*/}
        {/*      <div className="about-single-right">*/}
        {/*        <div>*/}
        {/*          <span>01.</span>*/}
        {/*          <h3>Web dev</h3>*/}
        {/*        </div>*/}
        {/*        <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo*/}
        {/*          edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac*/}
        {/*          stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo*/}
        {/*          kickstarter XOXO. Skateboard kombucha waistcoat. </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="about-single">*/}
        {/*      <div className="about-single-left">*/}
        {/*        <img className="small-star" width="150" src={aboutServiceStar1} alt="" />*/}
        {/*      </div>*/}
        {/*      <div className="about-single-right">*/}
        {/*        <div>*/}
        {/*          <span>01.</span>*/}
        {/*          <h3>Web dev</h3>*/}
        {/*        </div>*/}
        {/*        <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo*/}
        {/*          edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac*/}
        {/*          stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo*/}
        {/*          kickstarter XOXO. Skateboard kombucha waistcoat. </p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <Worldwide />

        {/*<TriggerImg threshold="0" delay={1} cName="my-10">*/}
        {/*  <img className="service-stickers" width="100%" src={serviceStickers} alt="" />*/}

        {/*  <img className="service-stickers-small " width="100%" src={serviceStickersSmall} alt="" />*/}
        {/*</TriggerImg>*/}


        <section className="section-main-works mt-5">
          <div>
            {/*<div className="subsec-header">*/}
            {/*  <TriggerText threshold=".5" delay=".1">*/}
            {/*    <h2 className="subsec-title">Proces</h2>*/}
            {/*  </TriggerText>*/}
            {/*  <TriggerText threshold=".5" delay=".1">*/}
            {/*    <h5 className="">02.</h5>*/}
            {/*  </TriggerText>*/}
            {/*</div>*/}

            {/*<div className="subsec-body">*/}
            {/*  /!*<div className="ss-body-first"/>*!/*/}
            {/*  <div className="ss-body-second">*/}
            {/*    <TriggerText threshold="0" delay=".6">*/}
            {/*      <p>Z nami nie muszą Państwo martwić się o niewywiązanie się z terminu podczas wykonywania zlecenia.*/}
            {/*        Możesz skontaktować się z nami bezpośrednio, o każdej porze dnia i nocy. Wybierając <em>Lumina Studio</em> mają Państwo pewność inwestycji w projekt, który przyniesie zysk.</p>*/}
            {/*    </TriggerText>*/}
            {/*    <TriggerText threshold="0" delay=".35">*/}
            {/*      <span className="subsec-span">Jak działamy</span>*/}
            {/*    </TriggerText>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="new-subsec-body">
              <div className="subsec-span-wprapper">
                <div className="star"></div>
                <TriggerText threshold=".5" delay=".5">
                  <span className="subsec-span">Why we do what we do</span>
                </TriggerText>
              </div>
              <TriggerText threshold=".5" delay=".5">
                <p>
                  Brooklyn man bun intelligentsia selfies bitters shaman, meggings XOXO godard  dreamcatcher authentic slow-carb flannel. Ramps
                  church-key umami dreamcatcher authentic jean shorts next level brooklyn marfa VHS bitters scenester
                  palo santo before they. <em> sold out</em>
                </p>
              </TriggerText>
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


            {/*<div className="main-works-container">*/}
            {/*  <div className="single-work">*/}
            {/*    <div>*/}
            {/*      <h5>01.</h5>*/}
            {/*      <h3>Web development</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>*/}
            {/*      <div className="learn-more sw-right">*/}
            {/*        <a href="#">Sprawdź więcej</a>*/}
            {/*        <img width="30" src={arrow} alt="" />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <div className="single-work">*/}
            {/*    <div>*/}
            {/*      <h5>02.</h5>*/}
            {/*      <h3>Branding</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>*/}
            {/*      <div className="learn-more sw-right">*/}
            {/*        <a href="#">Sprawdź więcej</a>*/}
            {/*        <img width="30" src={arrow} alt="" />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <div className="single-work">*/}
            {/*    <div>*/}
            {/*      <h5>03.</h5>*/}
            {/*      <h3>Design</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>*/}
            {/*      <div className="learn-more sw-right">*/}
            {/*        <a href="#">Sprawdź więcej</a>*/}
            {/*        <img width="30" src={arrow} alt="" />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <div className="single-work">*/}
            {/*    <div>*/}
            {/*      <h5>04.</h5>*/}
            {/*      <h3>Strategy</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <p>Gluten-free skateboard YOLO, fam semiotics deep v selfies farm-to-table asymmetrical vice fashion axe tacos pug helvetica. Tote bag before they sold out bespoke, health goth food truck chillwave copper mug quinoa poke bitters. Brooklyn la croix microdosing.</p>*/}
            {/*      <div className="learn-more sw-right">*/}
            {/*        <a href="#">Sprawdź więcej</a>*/}
            {/*        <img width="30" src={arrow} alt="" />*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

          </div>
        </section>

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

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>

        {/*<Worldwide />*/}

        <LowerFooter />

      </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export default ONas
