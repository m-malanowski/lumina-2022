import { gsap } from "gsap";

// OPEN MENU
export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07
    }
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 1.2,
    opacity: 0,
    y: 100,
    delay: 0.4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = node => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 1,
    opacity: 0,
    ease: "power3.inOut"
  });
};


export const staggerTextClose = (node1, node2, node3, node4) => {
  gsap.to([node1, node2, node3, node4], {
    duration: 1.2,
    opacity: 0,
    y: 100,
    delay: 0.5,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

