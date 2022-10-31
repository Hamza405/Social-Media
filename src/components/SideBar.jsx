import React from "react";
import { Box } from "@mui/material";
import { SideBarContainer } from "../styles/ContainersStyles";
import SideBarList from "./SideBarList";
const SideBar = ({ t }) => {
  return (
    <SideBarContainer>
      <Box position="fixed">
        <SideBarList theme={t} />
      </Box>
    </SideBarContainer>
  );
};

export default SideBar;
