import React from "react";
import { Typography } from "@mui/material";

const RightBarTitle = ({ title }) => {
  return (
    <Typography variant="h6" fontWeight={100} mt={2}>
      {title}
    </Typography>
  );
};

export default RightBarTitle;
