import { useState } from "react";

const useModal = () => {
  const [isShow, setIsShow] = useState(false);

  const handleOpenModal = () => {
    setIsShow(true);
  };

  const handleCloseModal = () => {
    setIsShow(false);
  };
  return { isShow, handleOpenModal, handleCloseModal };
};

export default useModal;
