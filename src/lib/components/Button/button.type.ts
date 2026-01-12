import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { MotionProps } from "framer-motion";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
    MotionProps {
  children: ReactNode;
  className?: string;
}
