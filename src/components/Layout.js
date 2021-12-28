import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
// import Footer from "./Footer"
import { layoutVariants, transition } from '../components/Variants'
// import Scroll from "./LocomotiveScroll"
// import ProjectsSubsection from "./ProjectsSubsection"
// import { Curtains } from "react-curtains";
// import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import ChatBot from 'react-simple-chatbot';
import TriggerText from "../components/TriggerText"

import memojiBot from "../assets/imgs/emoji.png"
import memojiUser from "../assets/imgs/emojiUser.png"

import memoji from "../assets/memoji.gif"

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


      <AnimatePresence initial={true} exitBeforeEnter className="pages-wrapper">
        <motion.div
          location={location}
          key={location.key}
          variants={layoutVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={transition}
          // exit="hidden"
          // variants={{
          //   initial: {
          //     opacity: 0,
          //     filter: 'blur(15px)',
          //     // transform: 'translate3d(0vw, 1.5vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
          //     // transformStyle: 'preserve-3d',
          //   },
          //   enter: {
          //     opacity: 1,
          //     filter: 'blur(0px)',
          //     // transform: 'translate3d(0vw, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
          //     // transformStyle: 'preserve-3d',
          //     transition: {
          //       duration: 1.4,
          //       delay: .6,
          //       // when: "beforeChildren",
          //       ease: [0.6, 0.01, -0.05, 0.9]
          //     }
          //   },
          //   exit: {
          //     opacity: 0,
          //     filter: 'blur(5px)',
          //     // transform: 'translate3d(0vw, 1.5vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
          //     // transformStyle: 'preserve-3d',
          //     transition: {
          //       delay: .6,
          //       duration: .4,
          //       ease: [0.6, 0.01, -0.05, 0.9]
          //     }
          //   }
          // }}
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
