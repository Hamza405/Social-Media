import { Box, Modal, styled } from "@mui/material";

export const ModalWrapper = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const BoxModal = styled(Box)({
  width: "400px",
  height: "280px",
  backgroundColor: "white",
  padding: 16,
  borderRadius: 10,
});
export const UserBox = styled(Box)({
  margin: "16px 0",
  display: "flex",
  gap: 5,
  alignItems: "center",
});
