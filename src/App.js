import React, { useState } from "react";
import { Box, Stack, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import Feeds from "./components/Feeds";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import AddPostModal from "./components/AddPostModal";
import useMyTheme from "./hooks/useMyTheme";
import AppDrawer from "./components/AppDrawer";

function App() {
  const myTheme = useMyTheme();
  const [drawer, setDrawer] = useState(false);
  return (
    <ThemeProvider theme={myTheme.theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar setDrawer={setDrawer} />
        <AppDrawer drawer={drawer} setDrawer={setDrawer} myTheme={myTheme} />
        <Stack direction="row" justifyContent="space-between">
          <SideBar t={myTheme} />
          <Feeds />
          <RightBar />
        </Stack>
        <AddPostModal />
      </Box>
    </ThemeProvider>
  );
}

export default App;
