import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
