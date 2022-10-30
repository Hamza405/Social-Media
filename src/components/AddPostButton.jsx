import { useRef, useState } from "react";
import { Tooltip, Fab, Avatar, Typography, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { BoxModal, ModalWrapper, UserBox } from "../styles/ModalStyle";

const AddPostButton = () => {
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <ModalWrapper
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxModal>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            />
            <Typography variant="span" fontWeight={400}>
              Hamza AL Sheikh
            </Typography>
          </UserBox>
          <TextField
            ref={inputRef}
            id="s"
            sx={{ width: "100%" }}
            variant="standard"
            multiline
            rows={3}
            placeholder="What's on your mind ?"
          />
        </BoxModal>
      </ModalWrapper>
    </>
  );
};

export default AddPostButton;
