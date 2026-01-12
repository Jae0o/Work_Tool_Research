import { useEffect, useRef } from "react";

type UseClickAwayCallback = (e?: MouseEvent | TouchEvent) => void;

const useClickAway = <T extends HTMLElement>(callback: UseClickAwayCallback) => {
  const ref = useRef<T | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleEvent = (e: MouseEvent | TouchEvent) => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const target = e.target;

      if (!target || !(target instanceof Node)) {
        return;
      }

      if (element.contains(target)) {
        return;
      }

      callbackRef.current(e);
    };

    // capture: true로 버블링 전에 이벤트 캡처
    document.addEventListener("mousedown", handleEvent, true);
    document.addEventListener("touchstart", handleEvent, true);

    return () => {
      document.removeEventListener("mousedown", handleEvent, true);
      document.removeEventListener("touchstart", handleEvent, true);
    };
  }, []);

  return ref;
};

export default useClickAway;
