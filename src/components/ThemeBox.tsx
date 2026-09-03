import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeBox = () => {
  const { isDark } = useTheme();
  return (
    <div>
      <h2>現在のテーマ: {isDark ? "ダーク" : "ライト"}</h2>
    </div>
  );
};

export default ThemeBox;
