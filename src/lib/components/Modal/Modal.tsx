import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "../Icons";
import type { ModalProps } from "./Modal.type";
import { ModalPortal } from "./components";
import { useAwayClickModal, useKeydownModal } from "./hooks";
import "./Modal.scss";

const Modal = ({
  children,
  isShow,
  onClose,
  hideCloseIcon = false,
  disableAwayClick = false,
}: ModalProps) => {
  const handleCloseModal = useAwayClickModal(onClose);

  useKeydownModal({
    callback: onClose,
    isShow,
    disableAwayClick,
  });

  const backgroundVariant = {
    close: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const modalVariant = {
    close: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <AnimatePresence>
      {isShow && (
        <ModalPortal isShow={isShow}>
          <motion.section
            className="modal__backdrop"
            onClick={(event) => !disableAwayClick && handleCloseModal(event)}
            variants={backgroundVariant}
            initial="close"
            animate="show"
            exit="close"
          >
            <motion.article
              className={`modal__content ${!hideCloseIcon ? "modal__content--with-close" : ""}`}
              variants={modalVariant}
              initial="close"
              animate="show"
              exit="close"
            >
              {!hideCloseIcon && (
                <motion.button
                  type="button"
                  onClick={onClose}
                  className="modal__close-button"
                  whileTap={{ scale: 1.2 }}
                  whileHover={{ opacity: 0.4 }}
                  aria-label="Close modal"
                >
                  <CloseIcon size="100%" />
                </motion.button>
              )}

              {children}
            </motion.article>
          </motion.section>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
