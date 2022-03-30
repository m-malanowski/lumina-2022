import star from "../assets/icons/star.svg"
import globe from "../assets/icons/globe.svg"
import React from "react"
import thumbUp from "../assets/icons/thumbUp.svg"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
// import {motion, useTransform, useViewportScroll} from "framer-motion"
// import orbitMain from "../assets/icons/orbitMainView.png"
import logo from "../assets/logo.svg"
const Worldwide = ({isGlobe}) => {

  // const { scrollYProgress } = useViewportScroll()
  // const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [ .1, .2, 120])
  //
  //
  // const text0 = () => {
  //   console.log(scrollYProgress)
  // }
  //
  // text0()

  return (
    <section
      className="section-worldwide"
    >
      {/*<TriggerImg delay={1.2}>*/}
      {/*  <img width="85" className="thumb-up" src={thumbUp} alt="" />*/}
      {/*</TriggerImg>*/}

      <div className="worldwide-container">
          <img
            className="worldwide-star " width="500" src={star} alt="Agencja interaktywna lumina studio"
          />

        <TriggerText threshold=".2" delay=".35">
          <h2 className=" w-100">Lumina Std</h2>
        </TriggerText>
        {/*<img src={logo} width="20%" alt="" />*/}
        <TriggerText threshold=".2" delay=".45">
          <h3>worldwide</h3>
        </TriggerText>
        { isGlobe ? <Globe /> : null }
      </div>
    </section>
  )
}

const Globe = () => {
  return (
    <TriggerImg delay={.5} threshold={0}>
      <img
        data-scroll
        // data-scroll-speed="2"
        className="globe" width="125" src={globe} alt="Agencja interaktywna lumina studio" />
    </TriggerImg>
  )
}


export default Worldwide


