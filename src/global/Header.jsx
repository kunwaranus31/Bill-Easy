import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import { FeaturesMegaMenu, FlexBox } from "../component";
import { logo } from "../assets";
import { Link, useLocation } from "react-router-dom";
import GradientButton from "../component/GradientButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const location = useLocation()

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Sercvices", link: "#" },
    { name: "Features", link: "#", hasMegaMenu: true },
    { name: "Benifits", link: "#" },
    { name: "Industries", link: "#" },
    { name: "Resources", link: "#" },
  ];

  const handleMouseEnter = (name) => {
    clearTimeout(hoverTimeoutRef.current);
    setHoverMenu(name);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoverMenu(null);
    }, 200); // 200ms delay
  };

  return (
    <Box component="header">
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 0 },
          py: { xs: 1.5, md: 0 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 1.5, md: 2 },
        }}
      >
        <Box>
          <Box component="img" src={logo} />
        </Box>
        <Box sx={{ position: "relative" }}>
          <Box
            component="ul"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { md: 2.5, lg: 3.5 },
              listStyle: "none",
              p: 0,
              m: 0,
              "& li": {
                cursor: "pointer",
                transition: "all 0.3 ease",
                position: "relative",
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
            {navItems.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => item.hasMegaMenu && handleMouseEnter(item.name)}
                onMouseLeave={() => item.hasMegaMenu && handleMouseLeave()}
                sx={{ position: "relative" }}
              >
                <Link to={item.link}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Typography variant="body">{item.name}</Typography>
                    {item.hasMegaMenu && (
                      <Box
                        sx={{
                          display: "inline-flex",
                          transform: hoverMenu === item.name ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
                      </Box>
                    )}
                  </Box>
                </Link>

                {/* Mega Menu */}
                {item.hasMegaMenu && hoverMenu === item.name && (
                  <Box
                    sx={{
                      position: "fixed", 
                      top: "100px", 
                      left: 0,
                      right: 0,
                      width: "100%",
                      color:"initial",
                      backgroundColor: "#fff", 
                      zIndex: 1000,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                      animation: "slideDown 0.3s ease-in-out",
                      "@keyframes slideDown": {
                        from: {
                          opacity: 0,
                          transform: "translateY(-10px)",
                        },
                        to: {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      },
                    }}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    {item.name === "Features" && <FeaturesMegaMenu />}
                  </Box>
                )}
              </li>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <FlexBox
            sx={{
              p: 0,
              m: 0,
            }}
          >
            <Link to="#" color="primary.main">
              <Typography variant="body" color="primary.main">
                Request a Demo
              </Typography>
            </Link>
            <GradientButton buttonText="Get Started" btnlink="#" />
          </FlexBox>
        </Box>

        {/* Mobile hamburger */}

        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            display: { xs: "inline-flex", md: "none" },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: 320, maxWidth: "100vw", pt: "env(safe-area-inset-top)" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            p: 2,
            pt: 3
          }}>
          <List>
            {navItems.map((item) =>
              <ListItem key={item.name} disablePadding >
                <ListItemButton
                  onClick={() => setOpen(false)}
                  component={Link}
                  to={item.link}
                  sx={{
                    color: location.pathname === item.link ? "primary.main" : "inherit",
                    fontWeight: location.pathname === item.link ? 500 : "inherit",
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            )}
          </List>

        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;