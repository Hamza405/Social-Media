import { styled, Toolbar, Box } from "@mui/material";

export const ToolBarStyle = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const SearchBoxStyle = styled(Box)(({ theme }) => ({
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

export const ActionsStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const MobileActionsStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
