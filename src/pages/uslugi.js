import React, { useRef } from "react"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
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
      <main className="services-page container-fluid"  data-scroll-container ref={containerRef}>
        {/*<section className="section-services-container">*/}
        {/*  <div className="main-container">*/}

        {/*    <TriggerText threshold=".5" delay=".2">*/}
        {/*      <h2*/}
        {/*        data-scroll*/}
        {/*        data-scroll-speed="-1"*/}
        {/*        data-scroll-direction="horizontal"*/}
        {/*      >Rozwijamy</h2>*/}
        {/*    </TriggerText>*/}

        {/*    /!*<TriggerText threshold=".5" delay=".3">*!/*/}
        {/*    /!*  <h2 className="pseudo-line"*!/*/}
        {/*    /!*      data-scroll*!/*/}
        {/*    /!*      data-scroll-speed="-1"*!/*/}
        {/*    /!*      data-scroll-direction="horizontal"*!/*/}
        {/*    /!*  >Się dla</h2>*!/*/}
        {/*    /!*</TriggerText>*!/*/}

        {/*    <TriggerText threshold=".5" delay=".25">*/}
        {/*      <h2*/}
        {/*        data-scroll*/}
        {/*        data-scroll-speed="1"*/}
        {/*        data-scroll-direction="horizontal"*/}
        {/*      >Się dla</h2>*/}
        {/*    </TriggerText>*/}

        {/*    <TriggerText threshold=".5" delay=".35">*/}
        {/*      <h2*/}
        {/*        data-scroll*/}
        {/*        data-scroll-speed="-4"*/}
        {/*        data-scroll-direction="horizontal"*/}
        {/*      >Ciebie</h2>*/}
        {/*    </TriggerText>*/}

        {/*    <TriggerImg delay={1}>*/}
        {/*      <img*/}
        {/*        data-scroll*/}
        {/*        data-scroll-speed="-2"*/}
        {/*        data-scroll-position="top"*/}
        {/*        className="orbit" width="75%" src={orbitMain} alt="" />*/}
        {/*    </TriggerImg>*/}

        {/*    <div className="scroll-down">*/}
        {/*      <TriggerImg delay={1.2}>*/}
        {/*        <img width="100" className="index-hand" src={handDown} alt="" />*/}
        {/*      </TriggerImg>*/}
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

        {/*<TriggerText threshold=".5" delay="1">*/}
          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={false}  fourthTapeScroll={false}
                          thirdTapeScroll={false}
                          subSectionMarqueeTitle={true}
                          title="Usługi"
                          dataScrollPosition="bottom" dataScrollSpeed="2" />
        {/*</TriggerText>*/}


        {/*<TriggerImg threshold="1" delay={2}>*/}
          <img className="service-stickers" width="100%" src={serviceStickers} alt="Lumina Studio Usługi" />
          <img className="service-stickers-small " width="100%" src={serviceStickersSmall} alt="Lumina Studio Usługi" />
        {/*</TriggerImg>*/}

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

          <AboutSectionAccordion/>



          {/*<div className="new-services">*/}
          {/*  <div>*/}
          {/*    <span>01</span>*/}
          {/*    <h2>Web dev</h2>*/}
          {/*    <img src={arrow} alt="" width="80px" className="ml-2 align-self-start" />*/}
          {/*  </div>*/}

          {/*  <div>*/}
          {/*    <span>02</span>*/}
          {/*    <h2>Design</h2>*/}
          {/*    <img src={arrow} alt="" width="80px" className="ml-2 align-self-start" />*/}
          {/*  </div>*/}

          {/*  <div>*/}
          {/*    <span>03</span>*/}
          {/*    <h2>Digital</h2>*/}
          {/*    <img src={arrow} alt="" width="80px" className="ml-2 align-self-start" />*/}
          {/*  </div>*/}

          {/*  <div>*/}
          {/*    <span>04</span>*/}
          {/*    <h2>SEO</h2>*/}
          {/*    <img src={arrow} alt="" width="80px" className="ml-2 align-self-start" />*/}
          {/*  </div>*/}

          {/*  <div>*/}
          {/*    <span>05</span>*/}
          {/*    <h2>Design</h2>*/}
          {/*    <img src={arrow} alt="" width="80px" className="ml-2 align-self-start" />*/}
          {/*  </div>*/}


          {/*  <div>*/}
          {/*    <span>062</span>*/}
          {/*    <h2>Design</h2>*/}
          {/*    <img src={arrow} alt="" width="80px" className="ml-2 align-self-start" />*/}
          {/*  </div>*/}

          {/*</div>*/}



          {/*<div className="subsec-header">*/}
          {/*  <TriggerText threshold=".5" delay=".45">*/}
          {/*    <h2 className="subsec-title">Nasze Usługi</h2>*/}
          {/*  </TriggerText>*/}
          {/*  <TriggerText threshold=".5" delay=".35">*/}
          {/*    <h5 className="">01</h5>*/}
          {/*  </TriggerText>*/}
          {/*</div>*/}


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


          {/*<div className="about-page-services">*/}
          {/*  <div className="about-single">*/}

          {/*    <TriggerLine threshold=".5" delay=".2">*/}
          {/*      <hr className="animated" />*/}
          {/*    </TriggerLine>*/}

          {/*    <div className="about-single-left">*/}
          {/*      /!*<TriggerImg threshold="0" delay={1.2}>*!/*/}
          {/*      /!*  <img className="small-star" width="150" src={serviceOrbit1} alt="" />*!/*/}
          {/*      /!*</TriggerImg>*!/*/}
          {/*      <span>I</span>*/}

          {/*    </div>*/}
          {/*    <div className="about-single-right">*/}
          {/*      <div>*/}
          {/*        /!*<TriggerText threshold=".5" delay=".35">*!/*/}
          {/*          /!*<span>01.</span>*!/*/}
          {/*        /!*</TriggerText>*!/*/}
          {/*        <TriggerText threshold=".5" delay=".55">*/}
          {/*          <h3>Web dev</h3>*/}
          {/*          /!*<div className="eloelo background-color"></div>*!/*/}
          {/*        </TriggerText>*/}
          {/*      </div>*/}
          {/*      <TriggerText threshold=".5" delay=".55">*/}
          {/*        <p>W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania responsywnych stron internetowych.*/}
          {/*          Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania treścią.</p>*/}
          {/*      </TriggerText>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="about-single">*/}

          {/*    <TriggerLine threshold=".5" delay=".2">*/}
          {/*      <hr className="animated" />*/}
          {/*    </TriggerLine>*/}

          {/*    <div className="about-single-left">*/}
          {/*      /!*<TriggerImg threshold="0" delay={1.2}>*!/*/}
          {/*      /!*  <img className="small-star" width="150" src={serviceOrbit2} alt="" />*!/*/}
          {/*      /!*</TriggerImg>*!/*/}
          {/*      <span>II</span>*/}
          {/*    </div>*/}
          {/*    <div className="about-single-right">*/}
          {/*      <div>*/}
          {/*        /!*<TriggerText threshold=".5" delay=".35">*!/*/}
          {/*        /!*  <span>02.</span>*!/*/}
          {/*        /!*</TriggerText>*!/*/}
          {/*        <TriggerText threshold=".5" delay=".55">*/}
          {/*          <h3>Branding</h3>*/}
          {/*        </TriggerText>*/}
          {/*        /!*<img className="rotating-star" src={smallStar} alt="Lumina Studio" />*!/*/}

          {/*      </div>*/}
          {/*      <TriggerText threshold=".5" delay=".55">*/}
          {/*        <p>Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie elementy identyfikacji wizualnej były spójne ze sobą jak*/}
          {/*          również odzwierciedlały branżę lub sprzedawany produkt.</p>*/}
          {/*      </TriggerText>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="about-single">*/}

          {/*    <TriggerLine threshold=".5" delay=".2">*/}
          {/*      <hr className="animated" />*/}
          {/*    </TriggerLine>*/}

          {/*    <div className="about-single-left">*/}
          {/*      /!*<TriggerImg threshold="0" delay={1.2}>*!/*/}
          {/*      /!*  <img className="small-star" width="150" src={serviceOrbit3} alt="" />*!/*/}
          {/*      /!*</TriggerImg>*!/*/}
          {/*      <span>III</span>*/}
          {/*    </div>*/}
          {/*    <div className="about-single-right">*/}
          {/*      <div>*/}
          {/*        /!*<TriggerText threshold=".5" delay=".35">*!/*/}
          {/*        /!*  <span>03.</span>*!/*/}
          {/*        /!*</TriggerText>*!/*/}

          {/*        <TriggerText threshold=".5" delay=".55">*/}
          {/*          <h3>Social media</h3>*/}
          {/*        </TriggerText>*/}
          {/*        /!*<img className="rotating-star" src={smallStar} alt="Lumina Studio" />*!/*/}

          {/*      </div>*/}
          {/*      <TriggerText threshold=".5" delay=".55">*/}
          {/*        <p>Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie. Idealnym rozwiązaniem są kampanie Google Ads,*/}
          {/*          Facebook oraz pozycjonowanie stron internetowych.</p>*/}
          {/*      </TriggerText>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="about-single">*/}

          {/*    <TriggerLine threshold=".5" delay=".2">*/}
          {/*      <hr className="animated" />*/}
          {/*    </TriggerLine>*/}

          {/*    <div className="about-single-left">*/}
          {/*      /!*<TriggerImg threshold="0" delay={1.2}>*!/*/}
          {/*      /!*  <img className="small-star" width="150" src={serviceOrbit4} alt="" />*!/*/}
          {/*      /!*</TriggerImg>*!/*/}
          {/*      <span>IV</span>*/}

          {/*    </div>*/}
          {/*    <div className="about-single-right">*/}
          {/*      <div>*/}
          {/*        /!*<TriggerText threshold=".5" delay=".35">*!/*/}
          {/*        /!*  <span>04.</span>*!/*/}
          {/*        /!*  <div className="eloelo background-color"></div>*!/*/}
          {/*        /!*</TriggerText>*!/*/}
          {/*        /!*<span>04.</span>*!/*/}

          {/*        <TriggerText threshold=".5" delay=".55">*/}
          {/*          <h3>SEO</h3>*/}
          {/*        </TriggerText>*/}
          {/*      </div>*/}
          {/*      <TriggerText threshold=".5" delay=".55">*/}
          {/*        <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo*/}
          {/*          edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac*/}
          {/*          stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo*/}
          {/*          kickstarter XOXO. Skateboard kombucha waistcoat. </p>*/}
          {/*      </TriggerText>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="about-single">*/}

          {/*    <TriggerLine threshold=".5" delay=".2">*/}
          {/*      <hr className="animated" />*/}
          {/*    </TriggerLine>*/}

          {/*    <div className="about-single-left">*/}
          {/*      /!*<TriggerImg threshold="0" delay={1.2}>*!/*/}
          {/*      /!*  <img className="small-star" width="150" src={serviceOrbit5} alt="" />*!/*/}
          {/*      /!*</TriggerImg>*!/*/}
          {/*      <span>V</span>*/}

          {/*    </div>*/}
          {/*    <div className="about-single-right">*/}
          {/*      <div>*/}
          {/*        /!*<TriggerText threshold=".5" delay=".35">*!/*/}
          {/*          /!*<span>05.</span>*!/*/}
          {/*          /!*<div className="eloelo background-color"></div>*!/*/}
          {/*        /!*</TriggerText>*!/*/}
          {/*        <TriggerText threshold=".5" delay=".55">*/}
          {/*          <h3>Digital</h3>*/}
          {/*        </TriggerText>*/}
          {/*      </div>*/}
          {/*      <TriggerText threshold=".5" delay=".55">*/}
          {/*        <p>         Zajmujemy się tworzeniem profesjonalnych sklepów internetowych, dopracowanych pod względem*/}
          {/*          mechanizmów sprzedażowych. Tworzone przez nas sklepy internetowe oparte są wyłącznie o*/}
          {/*          sprawdze, a przy tym niezawodne, rozwiązania e-commerce.</p>*/}
          {/*      </TriggerText>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="about-single">*/}

          {/*    <TriggerLine threshold=".5" delay=".2">*/}
          {/*      <hr className="animated" />*/}
          {/*    </TriggerLine>*/}

          {/*    <div className="about-single-left">*/}
          {/*      /!*<TriggerImg threshold="0" delay={1.2}>*!/*/}
          {/*      /!*  <img className="small-star" width="150" src={serviceOrbit6} alt="" />*!/*/}
          {/*      /!*</TriggerImg>*!/*/}
          {/*      <span>VI</span>*/}

          {/*    </div>*/}
          {/*    <div className="about-single-right">*/}
          {/*      <div>*/}
          {/*        /!*<TriggerText threshold=".5" delay=".35">*!/*/}
          {/*        /!*  <span>06.</span>*!/*/}
          {/*        /!*</TriggerText>*!/*/}
          {/*        <TriggerText threshold=".5" delay=".55">*/}
          {/*          <h3>Design</h3>*/}
          {/*        </TriggerText>*/}
          {/*        /!*<img className="rotating-star" src={smallStar} alt="Lumina Studio" />*!/*/}

          {/*      </div>*/}
          {/*      <TriggerText threshold=".5" delay=".55">*/}
          {/*        <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo*/}
          {/*          edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac*/}
          {/*          stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo*/}
          {/*          kickstarter XOXO. Skateboard kombucha waistcoat. </p>*/}
          {/*      </TriggerText>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </section>

        <Worldwide />


        <section className="index-process">
          <div className="subsec-header">
            <TriggerText threshold=".25" delay=".25">
              <h2 className="subsec-title">Artykuły</h2>
              <br />
              <p>Zapoznaj się z artykułami</p>
            </TriggerText>
            <TriggerText threshold=".25" delay=".25">
              <span className="">02.</span>
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
                        secondTapeScroll={true}  fourthTapeScroll={false}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"
        />

        <Foooter/>
        {/*<LowerFooter/>*/}

      </main>
      </LocomotiveScrollProvider>

    </>
)}

export default Uslugi
