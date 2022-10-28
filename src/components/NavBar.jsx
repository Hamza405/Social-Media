import React from "react";
import { AppBar, InputBase, Typography, Badge, Avatar } from "@mui/material";
import {
  SearchBoxStyle,
  ToolBarStyle,
  ActionsStyle,
} from "../styles/NavBatStyles";
import { Android, Mail, Notifications } from "@mui/icons-material";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <ToolBarStyle>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social
        </Typography>
        <Android sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBoxStyle>
          <InputBase placeholder="Search..." />
        </SearchBoxStyle>
        <ActionsStyle>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
          />
        </ActionsStyle>
      </ToolBarStyle>
    </AppBar>
  );
};
export default NavBar;
