import { Box, Button } from '@mui/material'
import React from 'react'
import { FlexBox, ResponsiveTypography } from '../component'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EastIcon from '@mui/icons-material/East';

const TextImage = ({ heading, subHeading, subHeadingWidth, text, BtnText, btnlink, image, textWidth, imageWidth, direction, headingWidth }) => {
    return (
        <FlexBox
            sx={{
                flexDirection: {xs:"column" , md:direction},
                justifyContent:"center"
            }}>
            <Box>
                <ResponsiveTypography
                    variant="h2"
                    width={headingWidth}
                >
                    {heading}
                </ResponsiveTypography>
                <ResponsiveTypography
                    variant="h5"
                    width={subHeadingWidth}
                    py="15px"
                >
                    {subHeading}
                </ResponsiveTypography>
                <ResponsiveTypography
                    variant="body"
                    display="block"
                    width={textWidth}>
                    {text}
                </ResponsiveTypography>
                <FlexBox sx={{
                    justifyContent: "left",
                    py: 5,
                    px: 0
                }} >
                    <Button
                        variant="contained"
                        to={btnlink}
                        sx={{
                            background: "linear-gradient(to right, #073E7A, #0C71E0)",
                        }}
                        endIcon={
                            <Box
                                sx={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: "40px",
                                    bgcolor: "#fff",
                                    display: "grid",
                                    placeItems: "Center",
                                    ml: 1
                                }}
                            >
                                <EastIcon
                                    sx={{
                                        color: "primary.main",
                                        width: "15px"
                                    }}
                                />
                            </Box>
                        }>
                        {BtnText}
                    </Button>
                    <Box>
                        <Box>
                            <ResponsiveTypography
                                variant='h5'
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    alignItems: "center",

                                }}
                            >
                                <PlayCircleIcon
                                    fontSize="large"
                                // sx={{
                                //   weight:"50px",
                                //   height:"50px"
                                // }} 
                                />
                                Watch How It Works
                            </ResponsiveTypography >
                        </Box>
                    </Box>
                </FlexBox>
            </Box>

            <Box>
                <Box
                    component='img'
                    src={image}
                    sx={{
                        width: { xs: "100%", md: imageWidth || "100%" }
                    }}
                />
            </Box>
        </FlexBox>
    )
}

export default TextImage
