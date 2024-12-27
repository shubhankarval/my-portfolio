"use client";

import FadeUpOnScroll from "@components/common/FadeUpOnScroll";
import { Chip } from "@nextui-org/chip";
import { useRef } from "react";

import Circe from "./CircleIcon";

const skillsList = [
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "Java",
  "AWS",
  "SpringBoot",
];

export default function ExperienceItem() {
  const ref = useRef(null);

  return (
    <div ref={ref} className="relative">
      <Circe targetRef={ref} />
      <FadeUpOnScroll>
        <div className="ml-40 max-w-lg">
          <div className="mb-1 text-2xl font-bold">
            Software Engineer&nbsp;<a href="/">@JPMC</a>
          </div>
          <div className="mb-2 font-light">Mar 2023 - Present</div>
          <div className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            cum vero numquam libero eius, dolor optio ipsum explicabo a
            accusamus ab at voluptatum consequuntur tempora omnis. Voluptatem
            veritatis modi ut.
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsList.map((skill, index) => (
              <Chip key={index} radius="lg" size="sm">
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  );
}
