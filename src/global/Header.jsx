import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import { FlexBox } from "../component";
import { logo } from "../assets";
import { Link, useLocation } from "react-router-dom";
import GradientButton from "../component/GradientButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation()

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Sercvices", link: "#" },
    { name: "Features", link: "#" },
    { name: "Benifits", link: "#" },
    { name: "Industries", link: "#" },
    { name: "Resources", link: "#" },
  ];

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
        <Box>
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
              <li key={item.name}>
                <Link to={item.link}>
                  <Typography variant="body">{item.name}</Typography>
                </Link>
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
          display:"flex",
          flexDirection:"column",
          gap:1.5,
          p:2,
          pt:3
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
