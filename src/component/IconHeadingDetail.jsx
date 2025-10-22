import { Box, Typography } from '@mui/material'
import React from 'react'
import ResponsiveTypography from './ResponsiveTypography'

const IconHeadingDetail = ({ image, heading, detail,detailWidth }) => {
    return (
        <Box sx={{
            textAlign:"center",
            mx:"auto"
        }}>
            <Box
                component="img"
                src={image}
                width="70px"
            />
            <Typography variant='h3' py="10px">
                {heading}
            </Typography>
            <ResponsiveTypography variant="body" display="block" width={detailWidth} >
                {detail}
            </ResponsiveTypography>
        </Box>
    )
}

export default IconHeadingDetail
