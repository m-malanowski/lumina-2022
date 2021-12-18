import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
// import Footer from "./Footer"
import { layoutVariants, transition } from '../components/Variants'
// import Scroll from "./LocomotiveScroll"
import starTransition from "../assets/icons/clover.svg"
// import ProjectsSubsection from "./ProjectsSubsection"
// import { Curtains } from "react-curtains";
// import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import ChatBot from 'react-simple-chatbot';
import TriggerText from "../components/TriggerText"

import memojiBot from "../assets/imgs/emoji.png"
import memojiUser from "../assets/imgs/emojiUser.png"

import memoji from "../assets/memoji.gif"
import TriggerImg from "./TriggerImg"
import handDown from "../assets/icons/handDown.svg"


const Layout = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isShown, setIsShown] = useState(false)

  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />

      {/*<Scroll callbacks={location}  />*/}

      {/*<AnimatePresence  >*/}
      {/*  <motion.img*/}
      {/*    location={location}*/}
      {/*    key={location.key}*/}
      {/*    initial="enter"*/}
      {/*    animate="enter"*/}
      {/*    exit="hidden"*/}
      {/*    variants={{*/}
      {/*      enter: {  scale: .001, display: 'none',*/}
      {/*        transition: {  duration: 1.0, ease: [.17,.67,.83,.67]}*/}
      {/*      },*/}
      {/*      hidden: {  display: "block" ,  scale: 20,  transformOrigin: "center",*/}
      {/*        transition: { delay:  .4 , duration: .9, ease: [.17,.67,.83,.67]}*/}
      {/*      }*/}
      {/*    }}*/}
      {/*    data-scroll data-scroll-sticky*/}
      {/*    className="star-transition" src={starTransition} width="1220" alt=""/>*/}
      {/*</AnimatePresence>*/}


      <AnimatePresence initial={true} exitBeforeEnter className="pages-wrapper">
        <motion.div
          location={location}
          key={location.key}
          variants={layoutVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={transition}
        >
          {children}
        </motion.div>


        {/*<TriggerText threshold=".5" delay="4">*/}
          <div className="chat-bot-wrapper">

            <ChatBot
              style={{ display: isShown ? 'block' : 'none' }}
              botAvatar={memojiBot}
              userAvatar={memojiUser}
              placeholder="Napisz wiadomość"
              steps={[
                {
                  id: '1',
                  message: 'Cześć, zapoznajmy się. Jestem Mateusz, a Ty?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Cześć {previousValue}, miło Cię poznać!',
                  end: true,
                },
              ]}
            />

            <img src={memoji} alt="Lumina" className="emoji" width={140} onClick={() => setIsShown(!isShown)} />
          </div>
        {/*</TriggerText>*/}



      </AnimatePresence>
    </>
  )
}

export default Layout
