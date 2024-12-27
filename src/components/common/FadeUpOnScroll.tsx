"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const FadeUpOnScroll = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: "some" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpOnScroll;
