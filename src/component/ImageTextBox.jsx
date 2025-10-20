import { Box, Button } from '@mui/material'
import React from 'react'
import { ResponsiveTypography } from '../component'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ImageTextBox = ({ image, heading, text, containerWidth, btnlink, display, contentWidth }) => {
    return (
        <Box
            sx={{
                borderRadius: 3,
                background: "linear-gradient(to bottom, #E7ECFF , #FFFFFF)",
                p: 3,
                width:{xs:"100%", md:containerWidth},
                boxShadow: 2,
                display: display,
                flexDirection: {xs:"column", md:"row-reverse"},
                alignItems: "center",
                justifyContent:"space-between"

            }}>
            <Box>
                <Box
                    component="img"
                    src={image}
                    sx={{
                        width: "100%"
                    }}
                />
            </Box>
            <Box
                sx={{
                    textAlign: "left"
                }}>

                <ResponsiveTypography
                    variant="h3"
                    sx={{
                        py: 2
                    }}
                >
                    {heading}
                </ResponsiveTypography>
                <ResponsiveTypography
                    variant="body"
                    display="block"
                    width={contentWidth}
                >
                    {text}
                </ResponsiveTypography>
                <Box
                    sx={{
                        pt: 3
                    }}>

                    <Button
                        variant="text"
                        component={Link}
                        to={btnlink}
                        endIcon={<ChevronRightIcon />}

                        sx={{
                            p: 0,
                            color: "primary.main",
                            "&:hover": {
                                background: "none"
                            }
                        }}
                    >
                        Learn more
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ImageTextBox
