import { useState } from "react";

export const useLayoutMode = (mode: "iPhone" | "laptop") => {
  const [currentMode, setCurrentMode] = useState<"iPhone" | "laptop">(mode);

  const handleChangeMode = (newMode: "iPhone" | "laptop") => {
    setCurrentMode(newMode);
  };

  return { currentMode, handleChangeMode };
};
