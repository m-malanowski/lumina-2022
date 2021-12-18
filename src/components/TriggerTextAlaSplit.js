import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

const TriggerText = ({children, delay, threshold}) => {
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
  }, [controls, inView]);

  return (
    <motion.div
      className="eloelo"
      ref={ref}
      animate={controls}
      initial="hidden"
      exit="hidden"
      variants={{
        visible: { opacity: 1, y: 0,
          transition: { delay:  delay , duration: .5}
        },
        hidden: { opacity: 0, y: 140}
      }}

    >
      {children}
    </motion.div>
  );
};
export default TriggerText