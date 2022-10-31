import { createTheme } from "@mui/material";
import { useState } from "react";

const useMyTheme = () => {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? "#17605a" : "#22a190",
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
    mode,
    setMode,
  };
};

export default useMyTheme;
