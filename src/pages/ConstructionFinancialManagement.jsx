import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { BoxBg, CheckIconHeading, FlexBox, GradientButton, HoverTextBox, ResponsiveTypography, TextBg, TextImage } from '../component'
import { bannerLogo1, bannerLogo2, bannerLogo3, bannerLogo4, bannerLogo5, bannerLogo6, bannerLogo7, blueBg, buildArrow, buildTextImg, financialBg2, financialIcon1, financialIcon2, financialIcon3, financialImg2, financialImg3, financialImg4, innerpageBanner, videoImg } from '../assets'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EastIcon from '@mui/icons-material/East';
import IconHeadingDetail from '../component/IconHeadingDetail';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AutomationSection from '../component/AutomationSection';


const ConstructionFinancialManagement = () => {

    const logoImages = [
        bannerLogo1,
        bannerLogo2,
        bannerLogo3,
        bannerLogo4,
        bannerLogo5,
        bannerLogo6,
        bannerLogo7,
    ];

    return (
        <Box>
            <BoxBg
                bgImage={innerpageBanner}
            >
                <FlexBox
                    sx={{
                        display: "block",
                        textAlign: "center",
                        placeItems: "center",
                        py: 5
                    }}>
                    <TextBg text="Smarter. Faster. Audit-Ready." />
                    <ResponsiveTypography
                        variant="h1"
                        width="760px">
                        Construction <Box component="span" color="primary.main">Financial Management Software</Box> for Canadian Builders
                    </ResponsiveTypography>

                    <ResponsiveTypography
                        variant="h5"
                        width="760px"
                        pt="20px">
                        Gain complete financial control — from budgets and billing to cash flow and compliance - with BillEasy’s all-in-one platform built for Canadian construction.
                    </ResponsiveTypography>
                </FlexBox>
            </BoxBg>

            <BoxBg
                bgImage={financialBg2}
                sx={{
                    backgroundPosition: "bottom",
                    pt: 5,
                    pb: 0,
                    position: "relative",
                    overflow: "visible"
                }}
            >
                <Box>
                    <TextImage heading={<>Smarter <Box component="span" color="primary.main">Construction Financial Management</Box> Built for <Box component="span" color="#FF4242">Canada</Box></>} subHeading="Canadian builders know that every project comes down to numbers." text="BillEasy brings clarity to your budgets, invoices, and cash flow — so you can make confident financial decisions, stay compliant, and protect your margins." BtnText="Book Free Demo" btnlink="#" image={financialImg2} subHeadingWidth="380px" textWidth="490px" direction="row" />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                        bottom: "-40px",
                        overFlow: "visible",
                        zIndex: 1
                    }}>
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: 4,
                            display: "inline-block",
                            textAlign: "center",
                            placeItems: "center",
                            py: 2,
                            mx: "auto",
                            boxShadow: 2,

                        }}>
                        <ResponsiveTypography
                            variant="h3"
                            width="500px">
                            Trusted by successful <Box component="span" color="primary.main">Construction Financial Management</Box> across the globe
                        </ResponsiveTypography>
                        <FlexBox
                            sx={{
                                gap: 0,
                                justifyContent: "center",
                            }}
                        >
                            {
                                logoImages.map((image, index) => (
                                    <Box key={index} component="img" src={image} />
                                ))
                            }
                        </FlexBox>
                    </Box>
                </Box>
            </BoxBg>
            <FlexBox
                sx={{
                    pt: 15,
                    pb:10,
                }}>
                <Box>
                    <Box sx={{
                        display: "flex"
                    }} >
                        <Typography
                            variant='h2'
                            pb="20px"
                        >
                            Construction <Box component="span" color="primary.main">Accounting</Box><Box component="br" />  <Box component="img" src={buildTextImg} width="100px" /> That Fits the <Box component="br" /> Way You Build <Box component="img" src={buildArrow} width="100px" ml="20px" />
                        </Typography>
                    </Box>
                    <ResponsiveTypography
                        variant="body"
                    >
                        Traditional accounting tools miss the nuances of Canadian construction — from lien holdbacks to CRA compliance. BillEasy solves that by connecting every transaction directly to project activities. Track costs, approvals, and forecasts in one secure system, purpose-built for the realities of construction finance.
                    </ResponsiveTypography>
                    <Box sx={{
                        pt: 2
                    }}>

                        <CheckIconHeading items={[
                            { heading: "Built for provincial rules (Ontario, Alberta, BC)" },
                            { heading: "Linked to CRA-compliant export formats" },
                            { heading: "Transparent job costing and forecasting" },
                        ]} />
                    </Box>
                    <FlexBox sx={{
                        justifyContent: "left",
                        py: 5,
                        px: 0
                    }} >
                        <Button
                            variant="contained"
                            to="#"
                            sx={{
                                background: "linear-gradient(to right, #073E7A, #0C71E0)",
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
                            Start Managing Smarter
                        </Button>
                        <Box>
                            <Box>
                                <ResponsiveTypography
                                    variant='h5'
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        alignItems: "center",

                                    }}
                                >
                                    <PlayCircleIcon
                                        fontSize="large"
                                    // sx={{
                                    //   weight:"50px",
                                    //   height:"50px"
                                    // }} 
                                    />
                                    Watch How It Works
                                </ResponsiveTypography >
                            </Box>
                        </Box>
                    </FlexBox>
                </Box>
                <Box
                    component="img"
                    src={financialImg3}
                    sx={{
                        width: { xs: "100%", md: "710px" }
                    }}
                />
            </FlexBox>
            <Box
                sx={{
                    background: "#F2F9FF",
                    py: 5
                }}>
                <FlexBox
                    sx={{
                        display: "block"
                    }}>
                    <Box
                        sx={{
                            mx: "auto",
                            textAlign: "center",
                            justifyItems: "center",
                            pb: 4
                        }}>
                        <Typography
                            variant="h5"
                            color="primary.main"
                            pb="10px">
                            A Complete Financial Management System
                        </Typography>
                        <ResponsiveTypography
                            variant="h2"
                            width="660px">
                            Run Your <Box component="span" color="primary.main">Projects</Box> - and Your Numbers - From <Box component="span" color="primary.main">One Platform</Box>
                        </ResponsiveTypography>
                    </Box>
                    <FlexBox
                        sx={{
                            position: "relative",
                            py: 0,
                            justifyContent: "center",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                height: "2px", // border thickness
                                background:
                                    "linear-gradient(to right, rgba(228, 228, 228, 0), rgba(228, 228, 228, 1), rgba(228, 228, 228, 1), rgba(228, 228, 228, 0))",
                            },
                        }}
                    >
                        <Box sx={{
                            pb: 3
                        }}>
                            <IconHeadingDetail image={financialIcon1} heading="Budgeting & Forecasting" detail="Create detailed budgets, compare forecasts vs actuals, and spot overruns before they cut into profits." detailWidth="460px" />
                        </Box>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                width: "1px",
                                background: "linear-gradient(to bottom, rgba(228, 228, 228, 0), rgba(228, 228, 228, 1))",
                                border: "none",
                            }}
                        />
                        <Box sx={{
                            pb: 3
                        }}>
                            <IconHeadingDetail image={financialIcon2} heading="Invoice Management" detail="Send branded, milestone-based invoices. Automate payment reminders and track client payments with ease." detailWidth="460px" />
                        </Box>
                    </FlexBox>
                    <FlexBox
                        sx={{
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                pt: 3
                            }}>
                            <IconHeadingDetail image={financialIcon3} heading="Real-Time Reconciliation" detail="See live updates of payments, receipts, and expenses for complete cash flow visibility." detailWidth="460px" />
                        </Box>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                width: "1px",
                                background: "linear-gradient(to bottom, rgba(228, 228, 228, 1), rgba(228, 228, 228, 0))",
                                border: "none",
                            }}
                        />
                        <Box sx={{
                            pt: 3
                        }}>
                            <IconHeadingDetail image={financialIcon2} heading="Multi-Project Visibility" detail="Manage multiple jobs side-by-side and track which projects are profitable at a glance." detailWidth="460px" />
                        </Box>
                    </FlexBox>
                </FlexBox>
            </Box>
            <Box
                sx={{
                    py: 12
                }}>
                <TextImage heading="Stay Organized, Stay Compliant, Stay Ahead" text={<> BillEasy doesn’t replace your accountant — it makes their life easier. Every transaction is automatically logged with a full audit trail, ensuring your records are ready for CRA audits and provincial compliance at any time.<Box component="br" /> <Box component="br" /> When it’s time for year-end reporting or financing, your data is one click away.</>} BtnText="Export a Sample Report" btnlink="#" image={financialImg4} direction="row-reverse" imageWidth="650px" headingWidth="500px" textWidth="590px" />
            </Box>

            <FlexBox
                sx={{
                    display:"block",
                    pb:9,
                    pt:2
                }}>
                <FlexBox sx={{
                    p: 0,
                    justifyContent:"space-between",
                    alignItems:"flex-end",
                    pb:4
                }}>
                    <Box>
                        <TextBg text="Financial Management Services That Save Time" />
                        <ResponsiveTypography variant="h2" width="500px" >
                            Automation That Keeps Your Projects Profitable
                        </ResponsiveTypography>
                    </Box>
                    <Box>
                        <ResponsiveTypography variant="body" display="block" width="550px">
                            BillEasy is more than just software — it’s your built-in financial assistant. With automated alerts for budget overruns, approval workflows, and customizable dashboards, your team spends less time on admin and more time building.
                        </ResponsiveTypography>
                    </Box>
                </FlexBox>
                <AutomationSection />
            </FlexBox>


            <Box
                sx={{
                    background: "#F2F9FF",
                    py: 7
                }}>
                <FlexBox
                    sx={{
                        display: "block",

                    }}>
                    <Box
                        sx={{
                            textAlign: "center",
                            placeItems: "center",
                            pb: 4
                        }}>
                        <TextBg text="Why Contractors Trust BillEasy" />
                        <ResponsiveTypography
                            variant="h2">
                            Built for Builders. Trusted Across Canada.
                        </ResponsiveTypography>

                        <ResponsiveTypography
                            variant="body"
                            display="block"
                            width="670px"
                            pt="10px">
                            From complex estimates to milestone-based billing, Bill Easy is crafted to meet the real-world needs of builders, developers, and property professionals — no fluff, just features that work.
                        </ResponsiveTypography>
                    </Box>

                    <HoverTextBox items={[
                        { heading: "Canadian-Ready", text: "Handles Ontario holdbacks, Alberta project taxes, and more." },
                        { heading: "Audit-Ready", text: "Every action leaves a digital trail for peace of mind." },
                        { heading: "Cash Flow Clarity", text: "See where your money Stands daily.", textWidth: "200px" },
                        { heading: "Scalable", text: "Works whether you’re managing one crew or many sites." },
                    ]} />
                </FlexBox>
            </Box>
            <FlexBox
                sx={{
                    py: 9,
                    // px: 7,
                    borderRadius: 5,
                    display: "block",
                    mb: 8
                }}>
                <Box
                    sx={{
                        mx: "auto",
                        textAlign: "center"
                    }}>
                    <ResponsiveTypography
                        variant="h2">
                        Explore Our <Box component="span" color="primary.main" >Construction Invoicing </Box>Software
                    </ResponsiveTypography>
                    <ResponsiveTypography
                        variant="h5"
                        width="800px"
                        mx="auto"
                        pt="10px">
                        Invoicing sits at the heart of construction finance. BillEasy lets you issue branded invoices, link them to milestones and expenses, and track payment status in a single view. Holdbacks are calculated and tracked per provincial rules.
                    </ResponsiveTypography>
                </Box>
                <FlexBox sx={{
                    px: 0,
                    pt: 4
                }}>
                    <Box>
                        <ResponsiveTypography
                            variant="h2">
                            Want to see invoicing in action?
                        </ResponsiveTypography>
                        <ResponsiveTypography
                            variant="h3"
                            width="580px"
                            pt="20px">
                            <Typography
                                component={Link}
                                to="#"
                                variant='h3'
                                color='primary.main'
                            >
                                Request a demo</Typography> and we’ll walk through a sample project from estimate to paid invoice using construction billing software.
                        </ResponsiveTypography>
                        <FlexBox sx={{
                            px: 0,
                        }} >
                            <GradientButton buttonText="Request a Free Demo" btnlink="#" />
                            <Button
                                variant="text"
                                component={Link}
                                to="#"
                                endIcon={<EastIcon />}

                                sx={{
                                    p: 0,
                                    color: "primary.main",
                                    "&:hover": {
                                        background: "none"
                                    }
                                }}
                            >
                                Join Our Free Beta
                            </Button>
                        </FlexBox>
                    </Box>
                    <Box>
                        <Box
                            component="img"
                            src={videoImg}
                            width="100%"
                        />
                    </Box>
                </FlexBox>
            </FlexBox>
            <FlexBox
                sx={{
                    display: "block",
                    backgroundImage: `url(${blueBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    py: 6,
                    borderRadius: 5,
                    textAlign: "center",
                    color: "#fff",
                    mt: 3,
                    mb: 7
                }}>
                <ResponsiveTypography
                    variant="h2">
                    Stop running your business on scattered files.
                </ResponsiveTypography>
                <ResponsiveTypography
                    variant="h5"
                    width="920px"
                    sx={{
                        placeSelf: "center",
                        py: 2
                    }}
                >
                    BillEasy gives Canadian contractors one platform for estimates, contracts, scheduling, invoicing, and audit-ready reporting. Protect your margins, shorten payment cycles, and keep every job on the right track.
                </ResponsiveTypography>
                <ResponsiveTypography
                    variant="h3"
                    width="750px"
                    sx={{
                        placeSelf: "center",

                    }}>
                    Plans start at just $99/month. Book a demo today or request beta access to try the platform on a real job.
                </ResponsiveTypography>
                <FlexBox sx={{
                    justifyContent: "center",
                    pt: 5
                }} >
                    <Button
                        variant="contained"
                        sx={{
                            background: "#fff",
                            color: "primary.main"
                        }}
                        endIcon={
                            <Box
                                sx={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: "40px",
                                    bgcolor: "primary.main",
                                    display: "grid",
                                    placeItems: "Center",
                                    ml: 1
                                }}
                            >
                                <EastIcon
                                    sx={{
                                        color: "#fff",
                                        width: "15px"
                                    }}
                                />
                            </Box>
                        }>
                        Book a Demo
                    </Button>
                    <Button
                        variant="text"
                        component={Link}
                        to="#"
                        endIcon={<ChevronRightIcon />}

                        sx={{
                            p: 0,
                            color: "#fff",
                            "&:hover": {
                                background: "none"
                            }
                        }}
                    >
                        Request beta access
                    </Button>
                </FlexBox>
            </FlexBox>
        </Box>
    )
}

export default ConstructionFinancialManagement
