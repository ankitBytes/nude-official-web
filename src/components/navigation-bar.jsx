import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { css } from "@emotion/react";

import "../css/navigation-bar.css";
import BrandImage from "../assets/Intruders.png";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        background: "rgb(255,255,255,0.7)",
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Stack
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <img
              src={BrandImage}
              alt=""
              style={{
                width: "100px",
                maxWidth: "120px",
              }}
            />
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                minHeight: "3rem",
                maxHeight: "4rem",
                height: "100%",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  sx={css`
                    color: #70b4fc;
                    text-decoration: none;
                  `}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                    Home
                  </Typography>
                </MenuItem>

                <MenuItem
                  sx={css`
                    color: #70b4fc;
                    text-decoration: none;
                  `}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                    About Us
                  </Typography>
                </MenuItem>

                <MenuItem
                  sx={css`
                    color: #70b4fc;
                    text-decoration: none;
                  `}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                    Gallary
                  </Typography>
                </MenuItem>

                <MenuItem
                  sx={css`
                    color: #70b4fc;
                    text-decoration: none;
                  `}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                    Contact Us
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              className="links-container"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                maxHeight: "4rem",
                height: "100%",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                <a href="/">Home</a>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                <a href="#about">About Us</a>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                <a href="/">Gallary</a>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                <a href="/">Contact Us</a>
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
