import { Box  } from '@mui/material'
import React from 'react'
import { FlexBox, ResponsiveTypography  } from '../component'

const HeadingIconText = ({items,containerWidth }) => {
    return (
        <FlexBox
            sx={{

                justifyContent: "space-between",
                gap: 4,
                px:0
            }} >
            {
                items.map((item, index) => (
                    <Box key={index}
                        sx={{
                            background: "#F2F9FF",
                            borderRadius: 4,
                            p: 2,
                            width : {xs: "100%", lg:item.containerWidth}
                        }}>
                            <Box 
                            sx={{
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between",
                                pb:2
                            }} >
                                <ResponsiveTypography  variant='h3' color='primary.main'
                                sx={{
                                    width:item.headingWidth
                                }}
                                >
                                    {item.heading}
                                </ResponsiveTypography >
                                <Box 
                                component="img"
                                src={item.image}
                                />
                            </Box>
                            <ResponsiveTypography  variant='body' 
                            sx={{
                                display:"block",
                                width:item.textWidth
                            }}
                            >
                                {item.text}
                            </ResponsiveTypography >
                    </Box>
                ))
            }


        </FlexBox>
    )
}

export default HeadingIconText
