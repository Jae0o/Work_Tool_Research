import { forwardRef, useImperativeHandle, useRef, type MouseEvent } from "react";

import "./Ripple.scss";

export interface RippleRef {
  createRipple: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Ripple = forwardRef<RippleRef>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    createRipple: (event) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.width = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - rect.left - radius}px`;
      ripple.style.top = `${event.clientY - rect.top - radius}px`;

      const existingRipple = container.querySelector(".ripple");
      if (existingRipple) {
        existingRipple.remove();
      }

      container.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    },
  }));

  return (
    <div
      ref={containerRef}
      className="ripple-container"
    />
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
