import React from "react";
import { Box, Stack } from "@mui/material";
import Feeds from "./components/Feeds";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <SideBar />
        <Feeds />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
