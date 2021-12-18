import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { commonVariants, splitTextVariants } from "../components/Variants"

export function TriggerSplit({ children, threshold,  ...rest  }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: threshold,
    triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // else{
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  let words = children.split(' ')

  return words.map((word, i) => {
    return (
      <span
        ref={ref}
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden', padding: 0, margin: 0, lineHeight: 1 }}
      >
        <motion.span
          animate={controls}
          initial={{ y: "100%", opacity: 0 }}
          exit="hidden"
          variants={splitTextVariants}
          style={{ display: 'inline-block', willChange: 'transform', padding: 0, margin: 0, lineHeight: 1 }}
          custom={i}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.span>
      </span>
    )
  })
}