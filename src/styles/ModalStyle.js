import { Box, Modal, styled } from "@mui/material";

export const ModalWrapper = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const BoxModal = styled(Box)(({ theme }) => ({
  width: "400px",
  height: "280px",
  padding: 16,
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));
export const UserBox = styled(Box)({
  margin: "16px 0",
  display: "flex",
  gap: 5,
  alignItems: "center",
});
