import React from "react";
import { Box } from "@mui/material";

const FlexBox = ({ children, sx, ...props }) => {
  return (
    <Box
      sx={{
        maxWidth: "1400px",
        width:"100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // stack on mobile
        alignItems: "center",
        gap: { xs: 3, md: 5, lg: 6 },
        px: { xs: 2, sm: 3,lg:4 },
        Py:3,
        textAlign: { xs: "left", md: "left" },
        margin: "0 auto", // center container
        // overflow:"hidden", 
        ...sx, // allow overrides
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default FlexBox;
