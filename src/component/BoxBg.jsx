import React from "react";
import { Box } from "@mui/material";

const BoxBg = ({ children, bgImage, sx, ...props }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        margin: "0 auto",
        py:4,
        ...sx, // allow extra styles
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BoxBg;
