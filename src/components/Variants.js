import React from "react"

const splitTextVariants = {
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 1.4,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }),
  hidden: i => ({
    y: 140,
    transition: {
      delay: i * 0.005,
      duration: .6,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  })
}
const transition = { duration: .6, ease: [0.6, 0.01, -0.05, 0.9] }

const commonVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      delay: .5,
      when: "afterChildren"
    }
  },
  exit: {
    y: 5,
    opacity: 0,
    transition: { delay: .2, duration: .6 }
  }
}

const layoutVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(100px)'
  },
  enter: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: .6,
      delay: .2,
      // when: "beforeChildren",
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  },
  exit: {
    opacity: 0,
    filter: 'blur(100px)',
    transition: {
      delay: .45,
      duration: .8,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 1)",
    transition: {
      default: { duration: 1.7, ease: "easeInOut" }
    },
    transitionEnd: {
      fill: "rgba(255, 255, 255, 1)"
    }
  }
}

const pathVariants2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 1)",
    transition: {
      default: { delay: .4, duration: 1.35, ease: "easeInOut" }
    },
    transitionEnd: {
      fill: "rgba(255, 255, 255, 1)"
    }
  }
}




const pathVariantsOuter = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 0)"
  },
  visible: {
    scale: 1.05,
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    stroke: "rgba(255, 255, 255, 0)",
    transition: {
      default: { delay: 1.65, duration: .45, ease: "easeInOut" }
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // delay: 5,
      staggerChildren: 0.2,
      ease: [0.6, 0.01, -0.05, 0.9],
      delayChildren: 0.5
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}


const logoShowOrbit = {
  hidden: {
    opacity: 0,
  },
  visible: {
    // rotate: 1,
    opacity: 1,
    transition: {
      default: { delay: 1.65, duration: 1.45, ease: "easeInOut" }
    }
  }
}

const logoStarRotate = {
  hidden: {
    opacity: 0,
    blur: 10
  },
  visible: {
    blur: 0,
    rotate: 90,
    // x: 5,
    // y: 5,
    opacity: 1,
    transition: {
      default: { delay: .65, duration: 1.45, ease: "easeInOut" }
    }
  }
}



export { splitTextVariants }
export { transition }
export { commonVariants }
export { layoutVariants }
export { pathVariants }
export { pathVariantsOuter }
export { staggerContainer }
export { staggerItem }
export { pathVariants2 }


export { logoStarRotate }
export { logoShowOrbit }