import { Typography } from "@mui/material";
import React from "react";

const ResponsiveTypography = ({ children, variant, width,sx, ...props }) => {
  return (
    <Typography
  variant={variant || "body"}
  sx={{
    ...sx,
    width: { xs: "100%", sm: "90%", lg: width || "100%" },
    
  }}
  {...props}
>
  {children}
</Typography>
  );
};

export default ResponsiveTypography;
