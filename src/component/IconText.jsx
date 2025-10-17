import { Box, Typography } from '@mui/material'
import React from 'react'
import FlexBox from './FlexBox'

const IconText = ({items}) => {
    return (
        <FlexBox
        sx={{
            pt:7,
            justifyContent:"center",
            gap:2
        }}
        >
            {
                items.map((item, index) => (
                    <Box key={index} sx={{
                        background: "#F2F9FF",
                        borderRadius: 4,
                        textAlign:"Center",
                        py:2,
                        px:4,
                        width:"315px"
                    }} >
                        <Box component='img' src={item.image} />
                        <Typography sx={{
                            pt:1
                        }} variant='h3' >
                            {item.text}
                        </Typography>
                    </Box>
                ))
            }

        </FlexBox>
    )
}

export default IconText
