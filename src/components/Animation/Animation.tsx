import { motion } from "framer-motion";
import React from "react";
type props = {
  children: React.ReactNode;
  delay?: number;
};
export const ScaledDownAnimation: React.FC<props> = ({
  children,

  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: [0, 1], y: [50, 0], scale: [1.1, 1] }}
      transition={{
        delay: delay,
        duration: 0.4,
        // velocity: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export const FadeOutAnimation: React.FC<props> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{
        delay: delay,
        duration: 0.8,
        ease: "easeOut",

        // velocity: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideDownAnimation: React.FC<props> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1], y: [-50, 0] }}
      transition={{
        delay: delay,
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideUpAnimation: React.FC<props> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1], y: [10, 0] }}
      transition={{
        delay: delay,
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};
