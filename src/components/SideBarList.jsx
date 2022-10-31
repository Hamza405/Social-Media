import React from "react";
import {
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

const SideBarList = ({ theme }) => {
  console.log(theme.theme.palette);
  return (
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
          <Switch
            checked={theme.mode === "dark" ? true : false}
            onChange={(e) =>
              theme.setMode((p) => (p === "light" ? "dark" : "light"))
            }
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SideBarList;
