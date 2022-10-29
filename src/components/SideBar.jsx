import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
const SideBar = () => {
  return (
    <SideBarContainer>
      <Box position="fixed">
        <List>
          <MenuListItem text="Home" link="#home" icon={<Home />} />
          <MenuListItem text="Pages" link="#pages" icon={<Pages />} />
          <MenuListItem text="Groups" link="#groups" icon={<Group />} />
          <MenuListItem text="Friends" link="#friends" icon={<Person />} />
          <MenuListItem text="Settings" link="#settings" icon={<Settings />} />
          <MenuListItem text="Profile" link="#profile" icon={<AccountBox />} />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SideBarContainer>
  );
};

export default SideBar;
