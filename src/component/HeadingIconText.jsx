import { Box, Typography } from '@mui/material'
import React from 'react'
import FlexBox from './FlexBox'

const HeadingIconText = ({items,containerWidth }) => {
    return (
        <FlexBox
            sx={{

                justifyContent: "space-between",
                gap: 4,
            }} >
            {
                items.map((item, index) => (
                    <Box key={index}
                        sx={{
                            background: "#F2F9FF",
                            borderRadius: 4,
                            p: 2,
                            width : item.containerWidth
                        }}>
                            <Box 
                            sx={{
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"space-between",
                                pb:2
                            }} >
                                <Typography variant='h3' color='primary.main'
                                sx={{
                                    width:item.headingWidth
                                }}
                                >
                                    {item.heading}
                                </Typography>
                                <Box 
                                component="img"
                                src={item.image}
                                />
                            </Box>
                            <Typography variant='body' 
                            sx={{
                                display:"block",
                                width:item.textWidth
                            }}
                            >
                                {item.text}
                            </Typography>
                    </Box>
                ))
            }


        </FlexBox>
    )
}

export default HeadingIconText
