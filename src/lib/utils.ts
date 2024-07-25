import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const jumpTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
