import { Box, Typography } from '@mui/material'
import React from 'react'

const TextBg = ({ text }) => {
    return (

        <Typography
            variant='h5'
            sx={{
                display:"inline-block",
                background: "linear-gradient(to bottom, #0C71E0 , #073E7A)",
                color: "#fff",
                py: 1,
                px: 2,
                borderRadius: 8,
                mb:2
            }}>
            {text}
        </Typography>

    )
}

export default TextBg
