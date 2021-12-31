import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import TriggerText from "./TriggerText"
import arrow from "../assets/icons/right-arrow.svg"

const OldSbout = () => {
  return <>

    <section className="section-main-process">
      <div className="">
        <div className="subsec-header">
          <TriggerText threshold=".5" delay=".5">
            <span className="">01.</span>
          </TriggerText>
          <TriggerText threshold=".5" delay=".5">
            <h2 className="subsec-title">O nas</h2>
          </TriggerText>
        </div>
        <div className="subsec-body">
          <div className="ss-body-second">
            <TriggerText threshold=".5" delay=".5">
              <p>
                Jeżeli tak jak my uważasz, że większość stron internetowych dostępnych w internecie jest nudna i
                bez polotu, to <em>dobrze trafiłeś.</em>
              </p>
            </TriggerText>
            <TriggerText threshold=".5" delay=".5">
              <span className="subsec-span">Kim jesteśmy</span>
            </TriggerText>

            {/*<TriggerImg>*/}
            {/*  <img*/}
            {/*    data-scroll*/}
            {/*    data-scroll-speed="-2"*/}
            {/*    className="orbit" width="600" src={orbitProcess} alt="" />*/}
            {/*</TriggerImg>*/}

          </div>
          <div className="ss-body-first">
            <div className="single-process">
              <TriggerText threshold=".5" delay=".5">
                <h3 className="d-flex"> Branding <span className="d-flex"><img src={arrow} alt="" width="14px" className="ml-2 align-self-start" /></span></h3>
                {/*<span>01</span>*/}
              </TriggerText>
              <TriggerText threshold=".5" delay=".5">
                <p>Projektujemy logotypy, wizytówki oraz papier firmowy. Dbamy o to by wszystkie elementy
                  identyfikacji wizualnej były spójne ze sobą jak
                  również odzwierciedlały branżę lub sprzedawany produkt.</p>
              </TriggerText>

              {/*<TriggerText threshold=".5" delay=".5">*/}
              {/*  <div className="learn-more">*/}
              {/*    <Link to="/uslugi">*/}
              {/*      <span>Sprawdź</span>*/}
              {/*      <span />*/}
              {/*      <span>Więcej</span>*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*</TriggerText>*/}

            </div>

            <div className="single-process">
              <TriggerText threshold=".5" delay=".5">
                <h3>Web Development</h3>
                {/*<span>02</span>*/}
              </TriggerText>
              <TriggerText threshold=".5" delay=".5">
                <p>W naszej agencji interaktywnej świadczymy kompleksowe usługi z zakresu projektowania
                  responsywnych stron internetowych.
                  Wszystkie strony www wyposażamy w dedykowany system CMS do samodzielnego zarządzania
                  treścią.</p>
              </TriggerText>

              {/*<TriggerText threshold=".5" delay=".5">*/}
              {/*  <div className="learn-more">*/}
              {/*    <Link to="/uslugi">*/}
              {/*      <span>Sprawdź</span>*/}
              {/*      <span />*/}
              {/*      <span>Więcej</span>*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*</TriggerText>*/}

            </div>

            <div className="single-process">
              <TriggerText threshold=".5" delay=".5">
                <h3>Social media</h3>
                {/*<span>03</span>*/}
              </TriggerText>
              <TriggerText threshold=".5" delay=".5">
                <p>Mając stronę lub sklep internetowy warto pomyśleć o skutecznej reklamie. Idealnym rozwiązaniem
                  są kampanie Google Ads,
                  Facebook oraz pozycjonowanie stron internetowych.</p>
              </TriggerText>

              {/*<TriggerText threshold=".5" delay=".5">*/}
              {/*  <div className="learn-more">*/}
              {/*    <Link to="/uslugi">*/}
              {/*      <span>Sprawdź</span>*/}
              {/*      <span />*/}
              {/*      <span>Więcej</span>*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*</TriggerText>*/}

            </div>
          </div>
        </div>
      </div>

    </section>

  </>
}

export default OldSbout
