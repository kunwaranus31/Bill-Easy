import { Box } from '@mui/material'
import React from 'react'
import { ResponsiveTypography } from '../component'

const IconHeadingText = ({ items, containerWidth }) => {
    return (
        <Box
            sx={{

                // justifyContent: "space-between",
                gap: 4,
                // px:0

            }} >
            {
                items.map((item, index) => (
                    <Box key={index}
                        sx={{
                            background: "#F2F9FF",
                            borderRadius: 4,
                            p: 2,
                            mt: 2,
                            width: { xs: "100%", lg: item.containerWidth }
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                pb: 2,
                                gap: 3
                            }} >
                            <Box
                                component="img"
                                src={item.image}
                            />
                            <ResponsiveTypography variant='h3' color='primary.main'
                                sx={{
                                    width: item.headingWidth
                                }}
                            >
                                {item.heading}
                            </ResponsiveTypography >

                        </Box>
                        <ResponsiveTypography variant='body'
                            sx={{
                                display: "block",
                                width: item.textWidth
                            }}
                        >
                            {item.text}
                        </ResponsiveTypography >
                    </Box>
                ))
            }


        </Box>
    )
}

export default IconHeadingText
