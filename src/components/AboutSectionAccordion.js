import React, { useRef, useState } from "react"
import TriggerText from "./TriggerText"
import TriggerLine from "./TriggerLine"
import { motion } from "framer-motion"
import arrow from "../assets/icons/right-arrow.svg"
import { gsap } from "gsap"

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
            <h2 className="subsec-title">Nasza Misja</h2>
            <br />
            <p>Zapoznaj się z projektami</p>
          </TriggerText>
          <TriggerText threshold=".25" delay=".15">
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

            <TriggerLine threshold=".1" delay=".15">
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

            <TriggerLine threshold=".1" delay=".25">
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

    </>
  )
}

export default AboutSectionAccordion