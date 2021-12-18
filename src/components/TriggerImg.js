import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
const TriggerText = ({children, threshold, delay, cName}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: threshold,
    // triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // {console.log(inView)}
    }
    // else{
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  return (
    <motion.div
      className={cName}
      ref={ref}
      animate={controls}
      initial="hidden"
      exit="hidden"
      variants={{
        visible: { opacity: 1, transition: { delay, duration: 1.2}
        },
        hidden: { opacity: 0,  }
      }}
    >
      {children}
    </motion.div>
  );
};
export default TriggerText