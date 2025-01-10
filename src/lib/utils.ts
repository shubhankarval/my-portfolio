import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number) {
  const str = "#0";

  if (num > 9) {
    return str + num.toString();
  }

  return `${str}0${num}`;
}

// Function to extract text from ReactNode
export const extractText = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (React.isValidElement(node) && node.props.children) {
    return extractText(node.props.children); // Recursively extract text
  }

  return ""; // Default for other node types
};
