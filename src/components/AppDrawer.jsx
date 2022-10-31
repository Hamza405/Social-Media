import React from "react";
import { AppBar, Drawer, Toolbar, Typography, Box } from "@mui/material";
import SideBarList from "./SideBarList";

const AppDrawer = ({ drawer, setDrawer, myTheme }) => {
  return (
    <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Social</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: "6px 18px" }}>
        <SideBarList theme={myTheme} />
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
