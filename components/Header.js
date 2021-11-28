import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const pagesMenu = ["Home", "Features", "Roadmap", "Team"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      color="secondary"
      style={{
        height: "94px",
      }}
      position="static"
    >
      <Container style={{ padding: "12px" }} maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
                marginLeft: "1rem",
                marginBottom: "1.3rem",
              },
            }}
          >
            <img src="/logo.svg" alt="Sorry!" />
          </Typography>

          <Box
            sx={{
              flexGrow: 0.3,
              display: { xs: "flex", md: "none", row: "reverse" },
            }}
          >
            <img src="/logo.svg" alt="Sorry!" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "right",
                marginRight: "1.3rem",
              },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 2,
                display: "block",
                textTransform: "none",
              }}
              disableRipple
              color="primary"
            >
              Home
              <ArrowDropUpIcon
                color="primary"
                style={{
                  display: "flex",
                  coloumn: "reverse",
                  marginLeft: "10px",
                }}
              />
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mb: 5,
                mx: 2,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
              disableRipple
              color="secondary"
            >
              Features
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mb: 5,
                mx: 2,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
              disableRipple
              color="secondary"
            >
              Roadmap
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mb: 5,
                mx: 2,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
              disableRipple
              color="secondary"
            >
              Team
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{
                marginLeft: "3rem",
                textTransform: "none",
                width: "180px",
                height: "50px",
                marginTop: "8px",
                borderRadius: "0px",
                backgroundImage:
                  "linear-gradient(to right, #AC32E4, #7918F2, #4801FF)",
              }}
            >
              Join Our Discord
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 0.3,
              display: { xs: "flex", md: "none", marginRight: "1rem" },
            }}
          >
            <Tooltip title="Open Menu">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pagesMenu.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
