import React from "react";
import { Tooltip, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

const FloatButton = ({ setOpen }) => {
  return (
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
  );
};

export default FloatButton;
