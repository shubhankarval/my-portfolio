"use client";

import { motion, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

export default function CircleIcon({
  targetRef,
}: {
  targetRef: MutableRefObject<null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-1 stroke-black">
      <svg className="-rotate-90" height="75" viewBox="0 0 100 100" width="75">
        <circle
          className="fill-none stroke-slate-500 stroke-1"
          cx="75"
          cy="75"
          r="20"
        />
        <motion.circle
          className="fill-white stroke-[5px]"
          cx="75"
          cy="75"
          r="20"
          style={{ pathLength: scrollYProgress }}
        />
        <circle className="fill-slate-500 stroke-1" cx="75" cy="75" r="10" />
      </svg>
    </figure>
  );
}
