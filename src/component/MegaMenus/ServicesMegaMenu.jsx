import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import FlexBox from '../FlexBox'
import { Link } from 'react-router-dom'
import { featuresImg } from '../../assets'
import ResponsiveTypography from '../ResponsiveTypography'
import EastIcon from '@mui/icons-material/East';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const ServicesMegaMenu = () => {

  const [financialMenuVisible, setFinancialMenuVisible] = useState(false);
  const [projectMenuVisible, setProjectMenuVisible] = useState(false);
  const [constructionMenuVisible, setConstructionMenuVisible] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null)

  const financialItems = [
    { name: "Construction Accounting Management.", link: "/" },
    { name: "Construction Budget Management.", link: "/" },
    { name: "Construction Financial Audit Management.", link: "/" },
    { name: "Construction Budget Management", link: "/" },
    { name: "Construction Financial Report Management", link: "/" },
  ]


  const constructionsItems = [
    { name: "Construction Accounting Management.", link: "/" },
    { name: "Construction Budget Management.", link: "/" },
    { name: "Construction Financial Audit Management.", link: "/" },
    { name: "Construction Budget Management", link: "/" },
    { name: "Construction Financial Report Management", link: "/" },
  ]



  const projectItems = [
    { name: "Construction Budgeting Management.", link: "/" },
    { name: "Construction team management.", link: "/" },
    { name: "Construction Project Audits.", link: "/" },
    { name: "Construction Contract Management.", link: "/" },
    { name: "Task management.", link: "/" },
    { name: "Scheduling management.", link: "/" },
    { name: "Client Management.", link: "/" },
  ]



  return (
    <Box sx={{
      textAlign: "center"
    }}>
      <Box
        sx={{
          display: "inline-block",
          mx: "auto"
        }}>
        <FlexBox
          sx={{
            alignItems: "flex-start",
            background: "#fff",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            py: 5,
            borderRadius: "0px 0px 20px 20px",
            border: "1px solid",
            borderTop: "none",
            borderColor: "primary.main",
            gap: 4,
            justifyContent: "center"
          }}>
          <Box>
            <Box>
              <Button
                onClick={() => setActiveMenu(activeMenu === "financial" ? null : "financial")}
                // onMouseLeave={() => setFinancialMenuVisible(false) }
                sx={{
                  background: "#F2F9FF",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    background: "#0C71E0",
                    color: "#fff",
                  }
                }}
                endIcon={<ChevronRightIcon />}
              >
                Construction Financial Management
              </Button>
            </Box>

            <Box sx={{
              my: 2
            }}>
              <Button
                onClick={() => setActiveMenu(activeMenu === "project" ? null : "project")}
                // onMouseLeave={() => setFinancialMenuVisible(false) }
                sx={{
                  background: "#F2F9FF",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    background: "#0C71E0",
                    color: "#fff",
                  }
                }}
                endIcon={<ChevronRightIcon />}
              >
                Construction Project Management
              </Button>
            </Box>

            <Box>
              <Button
                onClick={() => setActiveMenu(activeMenu === "construction" ? null : "construction")}
                // onMouseLeave={() => setFinancialMenuVisible(false) }
                sx={{
                  background: "#F2F9FF",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    background: "#0C71E0",
                    color: "#fff",
                  }
                }}
                endIcon={<ChevronRightIcon />}
              >
                Pre-constructions
              </Button>
            </Box>
          </Box>

          {activeMenu === "financial" && (<Box>
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
          </Box>)}


          {activeMenu === "project" && (<Box>
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
                {projectItems.map((item) => (
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
          </Box>)}

          {activeMenu === "construction" && (<Box>
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
          </Box>)}



          <Box
            sx={{
              background: "#fff",
              border: "2px solid",
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
    </Box>
  )
}

export default ServicesMegaMenu
