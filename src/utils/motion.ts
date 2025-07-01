// utils/motion.ts
import type { Variants, Transition } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface FadeInOptions {
  direction?: Direction;
  type?: Transition["type"];
  delay?: number;
  duration?: number;
  ease?: Transition["ease"];
}

export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0.1
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeIn = (options: FadeInOptions = {}): Variants => {
  const {
    direction = "up",
    type = "spring",
    delay = 0,
    duration = 0.5,
    ease = "easeOut",
  } = options;

  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease,
      },
    },
  };
};

export const slideIn = (options: FadeInOptions = {}): Variants => {
  const {
    direction = "up",
    type = "tween",
    delay = 0,
    duration = 0.7,
    ease = "easeOut",
  } = options;

  return {
    hidden: {
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    },
    show: {
      y: 0,
      x: 0,
      transition: {
        type,
        delay,
        duration,
        ease,
      },
    },
  };
};
