import { Box, styled } from "@mui/material";

export const SideBarContainer = styled(Box)(({ theme }) => ({
  display: "block",
  flex: 1,
  padding: 2,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const RightBarContainer = styled(Box)(({ theme }) => ({
  flex: 2,
  padding: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const FeedsContainer = styled(Box)({ flex: 4, padding: 2 });
