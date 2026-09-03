import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>テーマ切り替え</button>
    </div>
  );
};

export default ThemeToggleButton;
