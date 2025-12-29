export const fadeBlur = (delay = 0) => ({
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 1.5, delay, ease: "easeOut" },
});

export const fadeInSection = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1.2, ease: "easeOut" },
  viewport: { once: true, margin: "-80px" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, ease: [0.4, 0, 0.2, 1] as const },
  viewport: { once: true, margin: "-60px" },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};
