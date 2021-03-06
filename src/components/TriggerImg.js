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
      // exit="hidden"
      // variants={{
      //   visible: { opacity: 1, transition: { delay, duration: 1.2}
      //   },
      //   hidden: { opacity: 0,  }
      // }}
      variants={{
        visible: { opacity: 1, y: 0, scaleY: 1.0,    rotate: '0deg', transformStyle: 'preserve-3d',
          transition: { delay:  delay , duration: 1.2, ease: [.215,.61,.355,1]}
        },
        hidden: { opacity: 0, y: 20,  scaleY: 1.2,  transformOrigin: "top left",  rotate: '1deg',
          transition: { delay:  .1 , duration: .8, ease: [.215,.61,.355,1]}
        },
        // exit: {  opacity: 0, y: 20,  scaleY: 1.2,  transformOrigin: "top left",   rotate: '1deg',
        //   transition: { delay:  .1 , duration: .8, ease: [.215,.61,.355,1]}
        // }
      }}
    >
      {children}
    </motion.div>
  );
};
export default TriggerText