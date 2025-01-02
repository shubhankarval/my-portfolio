"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center start"],
  });

  return (
    <div className="relative space-y-20">
      <motion.div
        className="absolute left-14 top-1 h-full w-[4px] origin-top bg-black"
        style={{ scaleY: scrollYProgress }}
      />
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
    </div>
  );
}
