import { Box, Button, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';

import React from 'react'
import { Link } from 'react-router-dom';

const GradientButton = ({buttonText, btnlink}) => {
    return (
        <Button
            variant="contained"
            component={Link}
            to={btnlink}
            sx={{
                background: "linear-gradient(to right, #073E7A, #0C71E0)",
                my:3
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
            <Typography variant='body' >

                {buttonText}
            </Typography>
        </Button>
    )
}

export default GradientButton
