import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-10 bg-blue-800 text-yellow-500 text-xl font-bold rounded-2xl mt-10 hover:opacity-80 cursor-pointer"
      >
        テーマ切り替え
      </button>
    </div>
  );
};

export default ThemeToggleButton;
