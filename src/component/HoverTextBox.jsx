import { Box, Typography } from '@mui/material';
import React from 'react';
import { contractorsBoxImg } from '../assets';
import FlexBox from './FlexBox';
import ResponsiveTypography from './ResponsiveTypography';

const HoverTextBox = ({ items }) => {
    return (
        <FlexBox sx={{ gap:2, justifycontent:"center" }}>
            {items.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        backgroundImage: `url(${contractorsBoxImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 4,
                        py: 2.5,
                        px: 2,
                        boxShadow: 2,
                        width: { xs: "100%", md: "300px" },
                        color: "inherit", 
                        transition: "color 0.4s ease",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: 0,
                            background: "linear-gradient(to bottom, #0C71E0, #073E7A)",
                            opacity: 0,
                            transition: "all 0.4s ease",
                            borderRadius: "inherit",
                            zIndex: 1,
                        },
                        "&:hover::after": {
                            height: "100%",
                            opacity: 0.9,
                        },
                        "&:hover": {
                            color: "#fff", 
                        },
                        "& > *": {
                            position: "relative",
                            zIndex: 2,
                        },
                    }}
                >
                    <Typography variant="h3">{item.heading}</Typography>
                    <ResponsiveTypography variant="body" width={item.textWidth} display="block" >{item.text}</ResponsiveTypography>
                </Box>
            ))}
        </FlexBox>
    );
}

export default HoverTextBox;
