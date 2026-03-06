export const motionTokens = {
  duration: {
    fast: 0.15,
    base: 0.24,
    slow: 0.34,
  },
  easing: {
    standard: [0.22, 0.61, 0.36, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
  },
  stagger: {
    list: 0.05,
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: {
    duration: motionTokens.duration.base,
    ease: motionTokens.easing.standard,
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.01 },
  whileTap: { scale: 0.98 },
};
