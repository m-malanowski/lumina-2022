import React, { useRef } from "react"
import LowerFooter from "../components/LowerFooter"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import TriggerLine from "../components/TriggerLine"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import orbitMain from "../assets/icons/orbitServicesViewNew.svg"
import serviceStickers from "../assets/icons/serviceStickers.svg"
import serviceStickersSmall from "../assets/icons/serviceStickersSmall.svg"
// import aboutServiceStar1 from "../assets/icons/aboutServiceStar1.svg"
// import aboutServiceStar2 from "../assets/icons/aboutServiceStar2.svg"
import SEO from "../components/SEO"
import smallStar from "../assets/icons/smallStar.svg"

import serviceOrbit1 from "../assets/icons/serviceOrbit1.svg"
import serviceOrbit2 from "../assets/icons/serviceOrbit2.svg"
import serviceOrbit3 from "../assets/icons/serviceOrbit3.svg"
import serviceOrbit4 from "../assets/icons/serviceOrbit4.svg"
import serviceOrbit5 from "../assets/icons/serviceOrbit5.svg"
import serviceOrbit6 from "../assets/icons/serviceOrbit6.svg"
import handDown from "../assets/icons/handDown.svg"
import arrow from "../assets/icons/right-arrow.svg"


// ...GatsbyImageSharpFluid
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

        <TriggerText threshold=".5" delay="1">
          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                          secondTapeScroll={false}  fourthTapeScroll={false}
                          thirdTapeScroll={false}
                          subSectionMarqueeTitle={true}
                          title="Usługi"
                          dataScrollPosition="bottom" dataScrollSpeed="2" />
        </TriggerText>


        <TriggerImg threshold="1" delay={1.5}>
          <img className="service-stickers" width="100%" src={serviceStickers} alt="Lumina Studio Usługi" />
          <img className="service-stickers-small " width="100%" src={serviceStickersSmall} alt="Lumina Studio Usługi" />
        </TriggerImg>

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


        <section className="about-page-process">
          <div className="subsec-header">
            <TriggerText threshold=".5" delay=".45">
              <h2 className="subsec-title">Nasze Usługi</h2>
            </TriggerText>
            <TriggerText threshold=".5" delay=".35">
              <h5 className="">01</h5>
            </TriggerText>
          </div>

          <div className="about-page-services">
            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                {/*<TriggerImg threshold="0" delay={1.2}>*/}
                {/*  <img className="small-star" width="150" src={serviceOrbit1} alt="" />*/}
                {/*</TriggerImg>*/}
                <span>I</span>

              </div>
              <div className="about-single-right">
                <div>
                  {/*<TriggerText threshold=".5" delay=".35">*/}
                    {/*<span>01.</span>*/}
                  {/*</TriggerText>*/}
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Web dev</h3>
                    {/*<div className="eloelo background-color"></div>*/}
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania responsywnych stron internetowych.
                    Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania treścią.</p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                {/*<TriggerImg threshold="0" delay={1.2}>*/}
                {/*  <img className="small-star" width="150" src={serviceOrbit2} alt="" />*/}
                {/*</TriggerImg>*/}
                <span>II</span>
              </div>
              <div className="about-single-right">
                <div>
                  {/*<TriggerText threshold=".5" delay=".35">*/}
                  {/*  <span>02.</span>*/}
                  {/*</TriggerText>*/}
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Branding</h3>
                  </TriggerText>
                  {/*<img className="rotating-star" src={smallStar} alt="Lumina Studio" />*/}

                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie elementy identyfikacji wizualnej były spójne ze sobą jak
                    również odzwierciedlały branżę lub sprzedawany produkt.</p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                {/*<TriggerImg threshold="0" delay={1.2}>*/}
                {/*  <img className="small-star" width="150" src={serviceOrbit3} alt="" />*/}
                {/*</TriggerImg>*/}
                <span>III</span>
              </div>
              <div className="about-single-right">
                <div>
                  {/*<TriggerText threshold=".5" delay=".35">*/}
                  {/*  <span>03.</span>*/}
                  {/*</TriggerText>*/}

                  <TriggerText threshold=".5" delay=".55">
                    <h3>Social media</h3>
                  </TriggerText>
                  {/*<img className="rotating-star" src={smallStar} alt="Lumina Studio" />*/}

                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie. Idealnym rozwiązaniem są kampanie Google Ads,
                    Facebook oraz pozycjonowanie stron internetowych.</p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                {/*<TriggerImg threshold="0" delay={1.2}>*/}
                {/*  <img className="small-star" width="150" src={serviceOrbit4} alt="" />*/}
                {/*</TriggerImg>*/}
                <span>IV</span>

              </div>
              <div className="about-single-right">
                <div>
                  {/*<TriggerText threshold=".5" delay=".35">*/}
                  {/*  <span>04.</span>*/}
                  {/*  <div className="eloelo background-color"></div>*/}
                  {/*</TriggerText>*/}
                  {/*<span>04.</span>*/}

                  <TriggerText threshold=".5" delay=".55">
                    <h3>SEO</h3>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                    stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                    kickstarter XOXO. Skateboard kombucha waistcoat. </p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                {/*<TriggerImg threshold="0" delay={1.2}>*/}
                {/*  <img className="small-star" width="150" src={serviceOrbit5} alt="" />*/}
                {/*</TriggerImg>*/}
                <span>V</span>

              </div>
              <div className="about-single-right">
                <div>
                  {/*<TriggerText threshold=".5" delay=".35">*/}
                    {/*<span>05.</span>*/}
                    {/*<div className="eloelo background-color"></div>*/}
                  {/*</TriggerText>*/}
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Digital</h3>
                  </TriggerText>
                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                    stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                    kickstarter XOXO. Skateboard kombucha waistcoat. </p>
                </TriggerText>
              </div>
            </div>

            <div className="about-single">

              <TriggerLine threshold=".5" delay=".2">
                <hr className="animated" />
              </TriggerLine>

              <div className="about-single-left">
                {/*<TriggerImg threshold="0" delay={1.2}>*/}
                {/*  <img className="small-star" width="150" src={serviceOrbit6} alt="" />*/}
                {/*</TriggerImg>*/}
                <span>VI</span>

              </div>
              <div className="about-single-right">
                <div>
                  {/*<TriggerText threshold=".5" delay=".35">*/}
                  {/*  <span>06.</span>*/}
                  {/*</TriggerText>*/}
                  <TriggerText threshold=".5" delay=".55">
                    <h3>Design</h3>
                  </TriggerText>
                  {/*<img className="rotating-star" src={smallStar} alt="Lumina Studio" />*/}

                </div>
                <TriggerText threshold=".5" delay=".55">
                  <p>Pok pok live-edge biodiesel gluten-free, godard knausgaard craft beer wolf succulents chia venmo
                    edison bulb cornhole. Woke hashtag actually cloud bread listicle letterpress. Dreamcatcher celiac
                    stumptown narwhal tilde. Flannel four dollar toast bitters intelligentsia pop-up copper mug venmo
                    kickstarter XOXO. Skateboard kombucha waistcoat. </p>
                </TriggerText>
              </div>
            </div>
          </div>
        </section>

        {/*<TriggerImg threshold="0" delay={1}>*/}
        {/*  <img className="service-stickers" width="100%" src={serviceStickers} alt="" />*/}

        {/*  <img className="service-stickers-small " width="100%" src={serviceStickersSmall} alt="" />*/}
        {/*</TriggerImg>*/}


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


        {/*<SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true} secondTapeScroll={true}*/}
        {/*                thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"/>*/}

        <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                        secondTapeScroll={true}  fourthTapeScroll={true}
                        thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2"
        />


        {/*<Worldwide/>*/}

        <LowerFooter/>

      </main>
      </LocomotiveScrollProvider>

    </>
)}

export default Uslugi
