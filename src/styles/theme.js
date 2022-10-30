import { createTheme } from "@mui/material";
import React, { useState } from "react";

const useMyTheme = () => {
  const [mode, setMode] = useState("light");
  // const toggleToLightMode = () => {
  //   console.log("d");
  //   setMode("light");
  // };
  // const toggleToDarkMode = () => {
  //   setMode("dark");
  // };
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#17605a",
      },
      secondary: {
        main: "#15c630",
      },
      otherColor: {
        main: "#999",
      },
    },
  });
  return {
    theme,
    setMode,
  };
};

export default useMyTheme;
