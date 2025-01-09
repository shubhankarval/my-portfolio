import React from "react";
import { cn } from "@lib/utils";

interface HeadingProps {
  level: number;
  children: React.ReactNode;
}

export const Heading = ({ level, children }: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically select the heading tag

  return (
    <HeadingTag
      className={cn("group relative font-semibold text-lg", {
        "text-3xl": level === 2,
        "text-2xl": level === 3,
        "text-xl": level === 4,
      })}
      id={sanitizeId(extractText(children))}
    >
      <a
        className="flex items-center"
        href={`#${sanitizeId(extractText(children))}`}
      >
        <span className="absolute -left-8 opacity-0 transition-opacity group-hover:opacity-30">
          #
        </span>
        {children}
      </a>
    </HeadingTag>
  );
};

const sanitizeId = (text: string) =>
  text
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-z0-9A-Z\-]/g, ""); // Remove all non-alphanumeric characters except dashes

// Function to extract text from ReactNode
const extractText = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (React.isValidElement(node) && node.props.children) {
    return extractText(node.props.children); // Recursively extract text
  }

  return ""; // Default for other node types
};
