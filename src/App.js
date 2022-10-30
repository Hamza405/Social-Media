import React, { useEffect, useState } from "react";
import { Box, Stack, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";
import Feeds from "./components/Feeds";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import AddPostModal from "./components/AddPostModal";
import useMyTheme from "./styles/theme";

function App() {
  const myTheme = useMyTheme();
  return (
    <ThemeProvider theme={myTheme.theme}>
      <>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <NavBar />
          <Stack direction="row" justifyContent="space-between">
            <SideBar t={myTheme} />
            <Feeds />
            <RightBar />
          </Stack>
          <AddPostModal />
        </Box>
      </>
    </ThemeProvider>
  );
}

export default App;
