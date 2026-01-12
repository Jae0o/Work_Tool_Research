import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";
import Ripple, { type RippleRef } from "./components/Ripple/Ripple";

import "./Button.scss";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
    MotionProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = "", onClick, ...props }: ButtonProps) => {
  const rippleRef = useRef<RippleRef>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    rippleRef.current?.createRipple(event);
    onClick?.(event);
  };

  return (
    <motion.button
      type="button"
      className={`button ${className}`}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      {...props}
    >
      {children}
      <Ripple ref={rippleRef} />
    </motion.button>
  );
};

export default Button;
