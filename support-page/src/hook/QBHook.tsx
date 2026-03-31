import { useState } from "react";

export function useQBHook() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(Boolean(!isOpen));
  };
  return { isOpen, handleClick };
}
