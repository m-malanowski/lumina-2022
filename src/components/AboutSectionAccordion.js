import React, { useRef, useState } from "react"
import TriggerText from "./TriggerText"
import TriggerLine from "./TriggerLine"
import { motion } from "framer-motion"
import arrow from "../assets/icons/right-arrow.svg"
import { gsap } from "gsap"
import MainBtn from "./MainBtn"
import trueStar from "../assets/icons/true-star.svg"

const AboutSectionAccordion = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)

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


  return  (
    <>
      <section className="about-page-process">
        <div className="subsec-header">
          <TriggerText threshold=".25" delay=".15">
            <h2 className="subsec-title">Usługi</h2>
            <br />
            <p>Zapoznaj się z naszymi usługami</p>
            <br /><br />
            <a href="" className="test-btn ">Umów spotkanie</a>

          </TriggerText>
          <TriggerText threshold=".25" delay=".15">
            <h5 className="">01.</h5>
          </TriggerText>
        </div>

        <div className="about-process-single mt-5">
          <div className="about-process-single-top">
            <div className="about-process-single-top__inner"/>

            {/*<TriggerLine threshold=".1" delay=".15">*/}
            {/*  <hr className="animated" />*/}
            {/*</TriggerLine>*/}

            <div>
              <TriggerText threshold=".5" delay=".35">
                {/*<span>01.</span>*/}
                <p onClick={() => setIsOpen1(!isOpen1)}> Design </p>
              </TriggerText>
            </div>
            <TriggerText threshold=".5" delay=".4">
              <p onClick={() => setIsOpen1(!isOpen1)}> Design </p>

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
            className="about-process-single-bottom"
          >
            <div className="service-description-wrapper">
                <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                  dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                  vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                  intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                  humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                  vexillologist twee ramps sartorial asymmetrical vape locavore.</p>

            </div>

            <div className="sub-services-wrapper">
              <a href="" className="test-btn">Projektowanie stron</a>
              <a href="" className="test-btn">UI</a>
              <a href="" className="test-btn">Logo</a>
              <a href="" className="test-btn">Branding</a>
              <a href="" className="test-btn">Ux</a>
              <a href="" className="test-btn">Ilustracja</a>
            </div>


          </motion.div>
        </div>

        <div className="about-process-single">
          <div className="about-process-single-top">
            <div className="about-process-single-top__inner"/>

            <TriggerLine threshold=".1" delay=".25">
              <hr className="animated" />
            </TriggerLine>

            <div>
              <TriggerText threshold=".5" delay=".35">
                {/*<span>02.</span>*/}

                <p onClick={() => setIsOpen2(!isOpen2)}>Web Development</p>
              </TriggerText>
            </div>

            <TriggerText threshold=".5" delay=".35">
              <p onClick={() => setIsOpen2(!isOpen2)}>Web Development</p>
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
              <div className="service-description-wrapper">
                {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                {/*<br />*/}
                <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                  dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                  vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                  intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                  humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                  vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
              </div>

            <div className="sub-services-wrapper">
              <a href="" className="test-btn">Projektowanie stron</a>
              <a href="" className="test-btn">UI</a>
              <a href="" className="test-btn">Logo</a>
              <a href="" className="test-btn">Branding</a>
              <a href="" className="test-btn">Ux</a>
              <a href="" className="test-btn">Ilustracja</a>
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
                {/*<span>03.</span>*/}
                <p onClick={() => setIsOpen3(!isOpen3)}>Branding</p>

              </TriggerText>
            </div>

            <TriggerText threshold=".5" delay=".35">
              <p onClick={() => setIsOpen3(!isOpen3)}>Branding</p>
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
            <div className="service-description-wrapper">
                {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
                {/*<br />*/}
                <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                  dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                  vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                  intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                  humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                  vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
            </div>
            <div className="sub-services-wrapper">
              <a href="" className="test-btn">Projektowanie stron</a>
              <a href="" className="test-btn">UI</a>
              <a href="" className="test-btn">Logo</a>
              <a href="" className="test-btn">Branding</a>
              <a href="" className="test-btn">Ux</a>
              <a href="" className="test-btn">Ilustracja</a>
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
                {/*<span>04.</span>*/}
                <p onClick={() => setIsOpen4(!isOpen4)}>Digital</p>

              </TriggerText>
            </div>

            <TriggerText threshold=".5" delay=".35">
              <p onClick={() => setIsOpen4(!isOpen4)}>Digital</p>
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
            <div className="service-description-wrapper">
              {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
              {/*<br />*/}
              <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
            </div>
            <div className="sub-services-wrapper">
              <a href="" className="test-btn">Projektowanie stron</a>
              <a href="" className="test-btn">UI</a>
              <a href="" className="test-btn">Logo</a>
              <a href="" className="test-btn">Branding</a>
              <a href="" className="test-btn">Ux</a>
              <a href="" className="test-btn">Ilustracja</a>
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
                {/*<span>05.</span>*/}
                <p onClick={() => setIsOpen5(!isOpen5)}>Social media</p>

              </TriggerText>

            </div>

            <TriggerText threshold=".5" delay=".35">
              <p onClick={() => setIsOpen5(!isOpen5)}>Social media</p>
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
            <div className="service-description-wrapper">
              {/*<h5 >Kancelaria specjalizuje się w sprawach związanych z dochodzeniem odszkodowań, zadośćuczynień, a także rent cywilnych.</h5>*/}
              {/*<br />*/}
              <p>Artisan paleo cornhole try-hard dreamcatcher kale chips salvia. Thundercats plaid quinoa
                dreamcatcher, chambray mixtape hoodie messenger bag tumeric tilde polaroid banh mi tbh. Drinking
                vinegar waistcoat hoodie fanny pack before they sold out yr taxidermy four dollar toast ramps venmo
                intelligentsia cred. Migas meditation before they sold out vice live-edge flannel. Chillwave mixtape
                humblebrag cronut church-key bicycle rights whatever. Hashtag tousled ethical kogi poke selvage,
                vexillologist twee ramps sartorial asymmetrical vape locavore.</p>
            </div>
            <div className="sub-services-wrapper">
              <a href="" className="test-btn">Projektowanie stron</a>
              <a href="" className="test-btn">UI</a>
              <a href="" className="test-btn">Logo</a>
              <a href="" className="test-btn">Branding</a>
              <a href="" className="test-btn">Ux</a>
              <a href="" className="test-btn">Ilustracja</a>
            </div>
          </motion.div>
          {/*<TriggerLine threshold=".5" delay=".25">*/}
          {/*  <hr className="animated last" />*/}
          {/*</TriggerLine>*/}
        </div>

      </section>
    </>
  )
}

export default AboutSectionAccordion