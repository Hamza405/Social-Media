import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MenuListItem = ({ text, link, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={link}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuListItem;
