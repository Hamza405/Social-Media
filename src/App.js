import React from "react";
import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Feeds from "./components/Feeds";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import AddPostModal from "./components/AddPostModal";

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" justifyContent="space-between">
        <SideBar />
        <Feeds />
        <RightBar />
      </Stack>
      <AddPostModal />
    </Box>
  );
}

export default App;
