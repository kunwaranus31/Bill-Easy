import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { BoxBg, FlexBox, ResponsiveTypography } from '../component'
import { footer, logo } from '../assets'
import { Link } from 'react-router-dom'

const Footer = () => {

    const aboutItems = [
        { label: "Home", link: "#" },
        { label: "Services", link: "#" },
        { label: "Features", link: "#" },
        { label: "Benefits", link: "#" },
        { label: "Industries", link: "#" },
    ]

    const privacyItems = [
        { label: "Blog", link: "#" },
        { label: "Case Studies", link: "#" },
        { label: "Help Center", link: "#" },
        { label: "Company", link: "#" },
    ]

    const contactItems = [
        { label: "+01 234 567 8910", link: "tel:+01 234 567 8910" },
        { label: "info@billeasy.ca", link: "mailto:info@billeasy.ca" },
        { label: "www.billeasy.ca", link: "www.billeasy.ca" },
    ]

    const footerItems = [
        { label: "Contact Us", link: "#" },
        { label: "Privacy", link: "#" },
        { label: "Policy", link: "#" },
        { label: "Terms & Condition", link: "#" },
    ]


    return (
        <Box>
            <BoxBg
                bgImage={footer}
                sx={{
                    pb: 2
                }}
            >
                <FlexBox
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 4,
                    }}>

                    <Box>
                        <Box
                            component="img"
                            src={logo}
                        />

                        <ResponsiveTypography
                            variant="body"
                            width="366px"
                            display="block"
                        >
                            BillEasy gives Canadian contractors one platform for estimates, contracts, scheduling, invoicing, and audit-ready reporting. Protect your margins, shorten payment cycles, and keep every job on the right track.
                        </ResponsiveTypography>
                    </Box>
                    <Box>
                        <ResponsiveTypography
                            variant="h3">
                            About
                        </ResponsiveTypography>
                        <Box
                            component="ul"
                            sx={{
                                p: 0,
                                mt: 3.5,

                            }}>
                            {aboutItems.map(({ label, link }) => (
                                <Box
                                    component="li" key={label} sx={{
                                        listStyle: "none",
                                        mb: 1.3
                                    }}>
                                    <Typography
                                        component={Link}
                                        to={link}
                                        variant='body'
                                        sx={{
                                            underline: "none",
                                            color: "inherit",
                                            textDecoration: "none",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                fontWeight: 500,
                                                color: "primary.main"
                                            }
                                        }}>
                                        {label}
                                    </Typography>

                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <ResponsiveTypography
                            variant="h3">
                            Privacy
                        </ResponsiveTypography>
                        <Box
                            component="ul"
                            sx={{
                                // listStyle:"none",
                                p: 0,
                                mt: 3.5,

                            }}>

                            {privacyItems.map(({ label, link }) => (
                                <Box
                                    component="li" key={label} sx={{
                                        listStyle: "none",
                                        mb: 1.3
                                    }}>
                                    <Typography
                                        component={Link}
                                        to={link}
                                        variant='body'
                                        sx={{
                                            underline: "none",
                                            color: "inherit",
                                            textDecoration: "none",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                fontWeight: 500,
                                                color: "primary.main"
                                            }
                                        }}>
                                        {label}
                                    </Typography>

                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <ResponsiveTypography
                            variant="h3">
                            Contact Us
                        </ResponsiveTypography>
                        <Box
                            component="ul"
                            sx={{
                                // listStyle:"none",
                                p: 0,
                                mt: 3.5,

                            }}>

                            {contactItems.map(({ label, link }) => (
                                <Box
                                    component="li" key={label} sx={{
                                        listStyle: "none",
                                        mb: 1.3
                                    }}>
                                    <Typography
                                        component={Link}
                                        to={link}
                                        variant='body'
                                        sx={{
                                            underline: "none",
                                            color: "inherit",
                                            textDecoration: "none",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                fontWeight: 500,
                                                color: "primary.main"
                                            }
                                        }}>
                                        {label}
                                    </Typography>

                                </Box>
                            ))}
                        </Box>
                    </Box>
                </FlexBox>
                <FlexBox
                    sx={{
                        display: "block",
                        py: 2
                    }}>
                    <Divider
                        sx={{
                            borderBottomWidth: "2px",
                            borderColor: "#E0E0E0",
                        }}
                    />
                </FlexBox>
                <FlexBox
                sx={{
                    justifyContent:"space-between"
                }}>
                    <Typography 
                    variant="body">
                        Ⓒ All Rights Reserved 2025 - Bill Easy. Powered by <Typography
                                component={Link}
                                to="https://apexwebstudios.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                sx={{
                                    bgcolor: "primary.main",
                                    color: "#fff",
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    textDecoration: "none",
                                }}
                            >Apex Web Studios</Typography>
                    </Typography>
                    <Box
                    sx={{
                        display:"flex",
                        gap:2,
                        width: "fit-content"

                    }}>
                        {footerItems.map(({ label, link }) => (
                            <Box
                                key={label}
                                sx={{
                                    display:"flex"
                                }}>
                                <Typography
                                    component={Link}
                                    to={link}
                                    variant='body'
                                    sx={{
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            fontWeight: 500,
                                            color: "primary.main"
                                        }
                                    }}>
                                    {label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </FlexBox>
            </BoxBg>
        </Box>
    )
}

export default Footer
