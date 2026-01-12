import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ModalPortalProps } from "./ModalPortal.type";

const ModalPortal = ({ isShow, children }: ModalPortalProps) => {
  const [modalBaseElement, setModalBaseElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    setModalBaseElement(document.body);

    if (!modalBaseElement) return;

    if (isShow) {
      const originalStyle = window.getComputedStyle(modalBaseElement).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isShow, modalBaseElement]);

  if (!isShow || !modalBaseElement) {
    return null;
  }

  return createPortal(<>{children}</>, modalBaseElement);
};

export default ModalPortal;
