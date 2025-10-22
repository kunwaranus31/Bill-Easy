import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import FlexBox from '../FlexBox'
import { Link } from 'react-router-dom'
import { featuresImg } from '../../assets'
import ResponsiveTypography from '../ResponsiveTypography'
import EastIcon from '@mui/icons-material/East';


const FeaturesMegaMenu = () => {

    const financialItems = [
        { name: "Construction Financial Management", link: "/construction-financial-management" },
        { name: "Construction Accounting Management.", link: "/" },
        { name: "Construction Budget Management.", link: "/" },
        { name: "Construction Financial Audit Management.", link: "/" },
        { name: "Construction Budget Management", link: "/" },
        { name: "Construction Financial Report Management", link: "/" },
    ]

    const ProjectItems = [
        { name: "Construction Budgeting Management.", link: "/" },
        { name: "Construction team management.", link: "/" },
        { name: "Construction Project Audits.", link: "/" },
        { name: "Construction Contract Management.", link: "/" },
        { name: "Task management.", link: "/" },
        { name: "Scheduling management.", link: "/" },
        { name: "Client Management.", link: "/" },
    ]

    const constructionsItems = [
        { name: "Smart Estimates", link: "/" },
        { name: "Financial Insights", link: "/" },
        { name: "Team Collaboration", link: "/" },
        { name: "Custom Templates", link: "/" },
        { name: "Exporting Reports", link: "/" },
    ]

    return (
        <Box>
            <FlexBox
                sx={{
                    alignItems: "flex-start",
                    background: "rgb(248 248 248 / 80%)",
                    py: 5,
                    borderRadius: "0px 0px 20px 20px",
                    border: "1px solid",
                    borderTop:"none",
                    borderColor:"primary.main",
                    gap:0,
                    justifyContent:"space-between"
                }}>
                <Box>
                    <Typography
                        variant='body'
                        color="primary.main"
                    >
                        Construction Financial Management
                    </Typography>
                    <Box>
                        <Box
                            component="ul"
                            sx={{
                                p: 0,
                                ml: 2,
                                "& li": {
                                    cursor: "pointer",
                                    transition: "all 0.3 ease",
                                    mb: 1.3,
                                    "&:hover": {
                                        opacity: 1,
                                        color: "primary.main",
                                        fontWeight: "500",
                                    },
                                    "& a": {
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "all 0.3 ease",
                                    },
                                },
                            }}
                        >
                            {financialItems.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link}>
                                        <Typography variant="body"
                                            sx={{
                                                fontSize: "14px"
                                            }}>{item.name}</Typography>
                                    </Link>
                                </li>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box>
                    <Typography
                        variant='body'
                        color="primary.main"
                    >
                        Construction Project Management
                    </Typography>
                    <Box>
                        <Box
                            component="ul"
                            sx={{
                                p: 0,
                                ml: 2,
                                "& li": {
                                    cursor: "pointer",
                                    transition: "all 0.3 ease",
                                    mb: 1.3,
                                    "&:hover": {
                                        opacity: 1,
                                        color: "primary.main",
                                        fontWeight: "500",
                                    },
                                    "& a": {
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "all 0.3 ease",
                                    },
                                },
                            }}
                        >
                            {ProjectItems.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link}>
                                        <Typography variant="body"
                                            sx={{
                                                fontSize: "14px"
                                            }}>{item.name}</Typography>
                                    </Link>
                                </li>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box>
                    <Typography
                        variant='body'
                        color="primary.main"
                    >
                        Pre-constructions
                    </Typography>
                    <Box>
                        <Box
                            component="ul"
                            sx={{
                                p: 0,
                                ml: 2,
                                "& li": {
                                    cursor: "pointer",
                                    transition: "all 0.3 ease",
                                    mb: 1.3,
                                    "&:hover": {
                                        opacity: 1,
                                        color: "primary.main",
                                        fontWeight: "500",
                                    },
                                    "& a": {
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "all 0.3 ease",
                                    },
                                },
                            }}
                        >
                            {constructionsItems.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link}>
                                        <Typography variant="body"
                                            sx={{
                                                fontSize: "14px"
                                            }}>{item.name}</Typography>
                                    </Link>
                                </li>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: "#fff",
                        border: "1px solid",
                        borderRadius: 5,
                        borderColor: "#F2F9FF",
                        px: 3,
                        py: 2,
                    }}>
                    <Box>

                        <Typography
                            variant='h4'
                            color="primary.main">
                            Explore Our Construction Invoicing Software
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        src={featuresImg}
                        width="250px"
                        pt="10px"
                    />
                    <Box>

                        <Typography
                            variant='body'
                            fontSize="20px"
                        >
                            Want to see invoicing in action?
                        </Typography>
                        <Box>

                            <ResponsiveTypography
                                variant="body"
                                fontSize="14px"
                                display="block"
                                width="400px"
                                py="10px"
                            >
                                Request a demo and we’ll walk through a sample project from estimate to paid invoice using construction billing software.
                            </ResponsiveTypography>
                        </Box>
                        <Button
                            variant="text"
                            component={Link}
                            to="#"
                            endIcon={<EastIcon />}

                            sx={{
                                color: "primary.main",
                                p: 0,
                                "&:hover": {
                                    background: "none"
                                }
                            }}
                        >
                            Request a demo
                        </Button>
                    </Box>
                </Box>
            </FlexBox>
        </Box>
    )
}

export default FeaturesMegaMenu
