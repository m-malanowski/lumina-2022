import React from "react"
import { pathVariants, pathVariants2, pathVariantsOuter, logoStarRotate, logoShowOrbit } from "../components/Variants"
import { motion } from "framer-motion"
const transition = { duration: 4, ease: "easeInOut" };
const FakeLoader = () => {
  return (
    <motion.div
      className="fake-loader-wrapper"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: { delay: 3.2, when: "beforeChildren", duration: .4 },
        transitionEnd: {
          display: "none"
        }
      }}
    >
      {/*<svg width="80" height="119" xmlns="http://www.w3.org/2000/svg" className="initialLogo">*/}
      {/*  <motion.path variants={pathVariants2} initial="hidden" animate="visible" d="M30.487 78.143c-4.162 0-7.546-3.414-7.546-7.614h-.003V51.356h.003c0-.01-.003-.023-.003-.036V46.54l11.298 11.39v-5.59L21.792 39.795H11.469v3.951c2.077 0 3.959.848 5.325 2.22a7.629 7.629 0 012.224 5.355v19.213h.003c0 4.196-3.387 7.61-7.553 7.61v3.952h19.018v-3.953h.001zM68.528 43.745v-3.951H58.21L45.88 52.22v5.59l11.18-11.27v23.993a7.619 7.619 0 01-2.214 5.378 7.498 7.498 0 01-5.335 2.232v3.952H68.53v-3.952h-.036c-4.15-.02-7.516-3.428-7.516-7.614v-19.18c.003-4.193 3.39-7.604 7.55-7.604z" fill="white"/>*/}
      {/*  <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M41.96 89.706V24.569h7.549c2.082 0 3.972.854 5.338 2.232a7.623 7.623 0 012.215 5.382h3.92V20.618H19.018v11.565h3.92c0-4.2 3.387-7.614 7.55-7.614h7.553v65.136c0 4.2-3.387 7.614-7.554 7.614v3.952H49.51v-3.952c-4.163.001-7.55-3.414-7.55-7.614z" fill="white"/>*/}
      {/*  /!*<motion.path variants={pathVariants} initial="hidden" animate="visible" d="M41.9612 68.5293H38.041V87.5501H41.9612V68.5293Z" fill="white"/>*!/*/}
      {/*  <motion.path variants={pathVariantsOuter} initial="hidden" animate="visible" d="M39.998 0C17.944 0 0 18.09 0 40.327v38.346c0 10.77 4.162 20.899 11.718 28.516C19.271 114.804 29.315 119 39.998 119 62.055 119 80 100.91 80 78.673V40.327C80 18.089 62.055 0 39.998 0zm36.083 78.672c0 20.058-16.187 36.376-36.082 36.376-9.636 0-18.696-3.786-25.51-10.655-6.817-6.87-10.57-16.004-10.57-25.72V40.326C3.92 20.269 20.108 3.952 40 3.952c19.896 0 36.082 16.317 36.082 36.375v38.345z" fill="white"/>*/}
      {/*  /!*<motion.path variants={pathVariants} initial="hidden" animate="visible" d="M30.4881 22.9377H38.0384V49.5089H41.9585V22.9377H49.5089C53.6713 22.9377 57.0592 26.3257 57.0592 30.4881H60.9794V19.0176H49.5089H30.4881H19.0176V30.4881H22.9377C22.9377 26.3257 26.3257 22.9377 30.4881 22.9377Z" fill="white"/>*!/*/}
      {/*</svg>*/}


      <motion.svg
        variants={pathVariants} initial="hidden" animate="visible"

        width="580" height="400" xmlns="http://www.w3.org/2000/svg" className="initialLogo"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 1517.93 606.45"
        version="1.1"
        viewBox="0 0 1517.93 606.45"
        xmlSpace="preserve"
      >
        <path
          d="M864.79 254.71H895.06V436.34000000000003H864.79z"
          className="st0"
        ></path>
        <path
          d="M229.07 391.78V254.71H198.8v115.17c0 3.79 1.51 7.43 4.19 10.11l52.17 52.17c2.68 2.68 6.32 4.19 10.11 4.19h115.17v-30.27H243.37c-7.9-.01-14.3-6.41-14.3-14.3zM562.07 391.78c0 7.9-6.4 14.29-14.29 14.29h-92.5c-7.9 0-14.29-6.4-14.29-14.29V254.71h-30.27v115.17c0 3.79 1.51 7.43 4.19 10.11l52.17 52.17c2.68 2.68 6.32 4.19 10.11 4.19h48.7c3.79 0 7.43-1.51 10.11-4.19l52.17-52.17c2.68-2.68 4.18-6.32 4.18-10.11V254.71h-30.27v137.07zM1050.61 258.9a14.307 14.307 0 00-10.11-4.19h-48.7c-3.79 0-7.43 1.5-10.11 4.19l-52.17 52.17a14.307 14.307 0 00-4.19 10.11v115.17h30.27V299.28c0-7.9 6.4-14.3 14.29-14.3h92.5c7.9 0 14.29 6.4 14.29 14.3v137.07h30.27V321.18c0-3.79-1.51-7.43-4.19-10.11l-52.15-52.17zM834.52 315.26l-4.19-4.19L804.26 285l-.02-.02-26.08-26.08a14.307 14.307 0 00-10.11-4.19H682.4l-30.28 30.27-30.27 30.27v121.09h30.27v-137.1c.02-7.88 6.41-14.26 14.29-14.26h47.01v151.36h29.51V284.99h47.01c7.87 0 14.26 6.37 14.29 14.25v137.11h30.27V321.18v-5.92zM1314.58 311.06l-51.93-52.21c-2.75-2.75-6.33-4.13-10.17-4.13h-48.64c-3.84 0-7.69 1.38-10.16 4.13l-52.21 52.21c-2.74 2.75-4.12 6.32-4.12 10.17v115.13h30.22v-45.34h120.91v45.34h30.5V321.23c0-3.85-1.65-7.42-4.4-10.17zm-26.1 49.74h-120.91v-61.55c0-7.97 6.32-14.29 14.29-14.29h92.33c7.97 0 14.29 6.32 14.29 14.29v61.55z"
          className="st0"
        ></path>
        {/*<motion.path*/}
        {/*  fill="transparent"*/}
        {/*  strokeWidth="12"*/}
        {/*  stroke="rgba(255, 255, 255, 1)"*/}
        {/*  strokeLinecap="round"*/}
        {/*  initial={{ pathLength: 0 }}*/}
        {/*  animate={{ pathLength: 1 }}*/}
        {/*  transition={transition}*/}
        {/*  d="M1502.26 294.29c-9.62-15.11-22.26-27.75-35.72-39.29-26.93-23.08-57.98-40.39-89.86-55.23-63.75-30.22-131.35-50.83-199.49-67.05-54.41-12.64-109.64-22.53-164.87-29.68v2.75c0 7.14-.55 14.29-1.92 21.16 54.68 5.22 109.08 12.64 162.95 23.08 68.15 13.2 136.02 30.5 199.76 57.98 31.6 14.01 62.66 30.23 89.04 52.21 13.19 10.99 25.55 23.35 34.62 37.64 9.07 14.29 15.12 30.77 15.12 47.54 0 17.04-6.05 33.52-15.12 47.81-9.34 14.29-21.43 26.38-34.62 37.37-26.66 21.98-57.71 38.19-89.31 52.21-63.75 27.2-131.62 43.97-199.77 57.16-68.15 12.91-137.12 21.16-206.36 26.1-69.25 5.22-138.49 7.69-207.74 7.69-69.52 0-138.77-2.48-208.01-7.69-69.25-4.94-138.21-12.91-206.36-25.83-68.16-13.18-136.03-30.22-199.78-57.42-31.6-13.74-62.66-29.95-89.31-51.93-13.2-11-25.56-23.36-34.9-37.65-9.06-14.29-15.11-30.77-15.11-47.81 0-16.76 6.04-33.25 15.11-47.54 9.34-14.56 21.43-26.93 34.62-37.92 26.66-21.98 57.71-38.19 89.31-52.21 63.75-27.48 131.62-44.51 199.77-57.98 68.15-12.92 137.12-21.16 206.36-26.38 65.68-5.23 131.35-7.42 197.29-7.7-.27-3.29-.27-6.59-.27-9.89 0-6.59.55-12.91 1.65-19.23-137.38.28-274.78 15.12-408.6 46.44-68.42 16.21-136.02 36.82-199.77 66.77-31.88 15.11-62.65 32.43-89.86 55.51-13.19 11.27-25.83 24.18-35.45 39.3C6.04 309.69-.28 327.28 0 345.41c-.28 18.42 6.04 36 15.38 51.11 9.62 15.11 22.26 28.03 35.72 39.57 26.93 23.08 57.98 40.67 89.58 55.51 63.75 30.23 131.35 51.11 199.77 67.6 136.84 32.42 277.81 47.26 418.5 47.26 140.42 0 281.38-14.84 418.22-46.99 68.42-16.49 136.02-37.37 199.77-67.6 31.88-15.11 62.65-32.7 89.86-55.51 13.46-11.55 25.83-24.45 35.45-39.57 9.62-15.39 15.94-32.97 15.66-51.39.29-18.13-6.03-35.72-15.65-51.11z"*/}
        {/*  className="st0"*/}
        {/*/>*/}

        <motion.path
          variants={logoShowOrbit} initial="hidden" animate="visible"
          d="M1502.26 294.29c-9.62-15.11-22.26-27.75-35.72-39.29-26.93-23.08-57.98-40.39-89.86-55.23-63.75-30.22-131.35-50.83-199.49-67.05-54.41-12.64-109.64-22.53-164.87-29.68v2.75c0 7.14-.55 14.29-1.92 21.16 54.68 5.22 109.08 12.64 162.95 23.08 68.15 13.2 136.02 30.5 199.76 57.98 31.6 14.01 62.66 30.23 89.04 52.21 13.19 10.99 25.55 23.35 34.62 37.64 9.07 14.29 15.12 30.77 15.12 47.54 0 17.04-6.05 33.52-15.12 47.81-9.34 14.29-21.43 26.38-34.62 37.37-26.66 21.98-57.71 38.19-89.31 52.21-63.75 27.2-131.62 43.97-199.77 57.16-68.15 12.91-137.12 21.16-206.36 26.1-69.25 5.22-138.49 7.69-207.74 7.69-69.52 0-138.77-2.48-208.01-7.69-69.25-4.94-138.21-12.91-206.36-25.83-68.16-13.18-136.03-30.22-199.78-57.42-31.6-13.74-62.66-29.95-89.31-51.93-13.2-11-25.56-23.36-34.9-37.65-9.06-14.29-15.11-30.77-15.11-47.81 0-16.76 6.04-33.25 15.11-47.54 9.34-14.56 21.43-26.93 34.62-37.92 26.66-21.98 57.71-38.19 89.31-52.21 63.75-27.48 131.62-44.51 199.77-57.98 68.15-12.92 137.12-21.16 206.36-26.38 65.68-5.23 131.35-7.42 197.29-7.7-.27-3.29-.27-6.59-.27-9.89 0-6.59.55-12.91 1.65-19.23-137.38.28-274.78 15.12-408.6 46.44-68.42 16.21-136.02 36.82-199.77 66.77-31.88 15.11-62.65 32.43-89.86 55.51-13.19 11.27-25.83 24.18-35.45 39.3C6.04 309.69-.28 327.28 0 345.41c-.28 18.42 6.04 36 15.38 51.11 9.62 15.11 22.26 28.03 35.72 39.57 26.93 23.08 57.98 40.67 89.58 55.51 63.75 30.23 131.35 51.11 199.77 67.6 136.84 32.42 277.81 47.26 418.5 47.26 140.42 0 281.38-14.84 418.22-46.99 68.42-16.49 136.02-37.37 199.77-67.6 31.88-15.11 62.65-32.7 89.86-55.51 13.46-11.55 25.83-24.45 35.45-39.57 9.62-15.39 15.94-32.97 15.66-51.39.29-18.13-6.03-35.72-15.65-51.11z"
          className="st0"
        />

        <motion.path
          variants={logoStarRotate} initial="hidden" animate="visible"
          d="M985.66 106.07c-20.06 0-38.74 5.49-54.41 15.11-30.77 18.41-51.38 52.21-51.38 90.67 0-42.04-24.46-78.31-59.91-95.34-13.74-6.6-29.4-10.45-45.89-10.45 21.98 0 42.32-6.59 59.08-18.13 28.3-18.97 46.72-51.39 46.72-87.94 0 41.22 23.35 76.94 57.7 94.53 14.29 7.42 30.78 11.55 48.09 11.55z"
          className="st1"
        />
        {/*<path*/}
        {/*  d="M985.66 106.07c-20.06 0-38.74 5.49-54.41 15.11-30.77 18.41-51.38 52.21-51.38 90.67 0-42.04-24.46-78.31-59.91-95.34-13.74-6.6-29.4-10.45-45.89-10.45 21.98 0 42.32-6.59 59.08-18.13 28.3-18.97 46.72-51.39 46.72-87.94 0 41.22 23.35 76.94 57.7 94.53 14.29 7.42 30.78 11.55 48.09 11.55z"*/}
        {/*  className="st1"*/}
        {/*></path>*/}
      </motion.svg>


      {/*<div className="svg-container">*/}
      {/*  <motion.img*/}
      {/*    width="605"*/}
      {/*    height="30"*/}
      {/*    initial={{ y: "100%", opacity: 0 }}*/}
      {/*    animate={{*/}
      {/*      y: 0,*/}
      {/*      opacity: 1,*/}
      {/*      transition: {*/}
      {/*        delay: 1.8,*/}
      {/*        duration: 1,*/}
      {/*        ease: [0.6, 0.01, -0.05, 0.9]*/}
      {/*      }*/}
      {/*    }}*/}
      {/*    src={letterLogoUpper} alt="" />*/}
      {/*  <motion.img*/}
      {/*    width="477"*/}
      {/*    height="16"*/}
      {/*    initial={{ y: "100%", opacity: 0 }}*/}
      {/*    animate={{*/}
      {/*      y: 0,*/}
      {/*      opacity: 1,*/}
      {/*      transition: {*/}
      {/*        delay: 2,*/}
      {/*        duration: 1,*/}
      {/*        ease: [0.6, 0.01, -0.05, 0.9]*/}
      {/*      }*/}
      {/*    }}*/}
      {/*    src={letterLogoLower} alt="" />*/}
      {/*</div>*/}

    </motion.div>
  )
}

export default FakeLoader



