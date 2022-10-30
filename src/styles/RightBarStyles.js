import { Box, List, styled } from "@mui/material";

export const RightBarWrapper = styled(Box)({
  position: "fixed",
  height: "89%",
  overflowY: "scroll",
  overflowX: "hidden",
});

export const RightBarListStyle = styled(List)({
  width: "100%",
  maxWidth: 360,
  backgroundColor: "background.paper",
});
