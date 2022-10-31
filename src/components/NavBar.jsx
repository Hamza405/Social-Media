import React from "react";
import {
  AppBar,
  InputBase,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  SearchBoxStyle,
  ToolBarStyle,
  ActionsStyle,
  MobileActionsStyle,
} from "../styles/NavBatStyles";
import { Mail, Notifications } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavBar = ({ setDrawer }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const openMenuHandler = () => setOpenMenu(true);
  return (
    <AppBar position="sticky" sx={{ background: "primary" }}>
      <ToolBarStyle>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social
        </Typography>
        <MenuIcon
          onClick={() => setDrawer(true)}
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <SearchBoxStyle bgcolor={"background.default"} color={"text.primary"}>
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
            onClick={openMenuHandler}
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
          />
        </ActionsStyle>
        <MobileActionsStyle onClick={openMenuHandler}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
          />
          <Typography variant="h6">Hamza</Typography>
        </MobileActionsStyle>
      </ToolBarStyle>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default NavBar;
