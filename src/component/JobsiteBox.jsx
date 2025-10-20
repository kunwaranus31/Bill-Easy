import React from 'react'
import { Box } from '@mui/material'
import { box1 } from '../assets'
import { FlexBox, ResponsiveTypography } from '../component'
import { BorderColor } from '@mui/icons-material'

const JobsiteBox = ({ fromColor, toColor, heading, numImg, text, img, direction, textWidth }) => {
    return (
        <Box>
            <FlexBox
                sx={{
                    position: "relative",
                    background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
                    borderRadius: "15px",
                    my: 2,
                    py: { xs: 2, md: "inherit" },
                    overflow: "hidden",
                    flexDirection: { xs: "column", md: direction },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "1.5px",               // border thickness
                        background: `linear-gradient(to right, #ffffffff, rgba(12, 114, 224, 1), #FFFFFF)`,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        background: `linear-gradient(to right, #ffffff, rgba(12, 114, 224, 1), #ffffff)`,
                    },
                }}
            >
                <Box>
                    <Box
                        component="img"
                        src={numImg}
                    />
                    <ResponsiveTypography
                        variant="h3"
                        color="primary.main"
                        mb="10px"
                    >
                        {heading}
                    </ResponsiveTypography>
                    <ResponsiveTypography
                        display="block"
                        width={textWidth}
                    >
                        {text}
                    </ResponsiveTypography>
                </Box>
                <Box>
                    <Box
                        component="img"
                        src={img}
                        sx={{
                            width: { xs: "100%", md: "inherit" }
                        }}

                    />
                </Box>
            </FlexBox>
        </Box>
    )
}

export default JobsiteBox 
