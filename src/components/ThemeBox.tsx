import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeBox = () => {
  const { isDark } = useTheme();
  return (
    <div
      className={`p-6 rounded-2xl text-center ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"} transition-all duration-800`}
    >
      <h2 className="text-xl font-semibold">現在のテーマ: {isDark ? "ダーク" : "ライト"}</h2>
    </div>
  );
};

export default ThemeBox;
