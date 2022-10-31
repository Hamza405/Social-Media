import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import {
  Home,
  Pages,
  Group,
  Person,
  Settings,
  AccountBox,
  ModeNight,
} from "@mui/icons-material";
import MenuListItem from "./Widgets/MenuListItem";
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
