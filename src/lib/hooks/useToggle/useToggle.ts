import { useState } from "react";

interface UseToggleProps {
  initialState?: boolean;
}

const useToggle = ({ initialState = false }: UseToggleProps = {}) => {
  const [isToggle, setIsToggle] = useState(initialState);

  const toggle = () => setIsToggle((prev) => !prev);

  const open = () => setIsToggle(true);
  const close = () => setIsToggle(false);

  return { isToggle, toggle, open, close };
};

export default useToggle;
