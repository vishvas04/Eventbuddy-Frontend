import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  position: "fixed",
  width: "100%",
  zIndex: 1000,
  marginBottom: "200px",
});

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    // Redirect to the user profile page
    navigate("/user/profile");
    handleClose();
  };

  const handleLogoutClick = () => {
    // Implement your logout logic here
    // For example, clear the authentication token
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");
    handleClose();
  };

  return (
    <StyledAppBar>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant='h6'
          component='div'
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        >
          EventBuddy
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton color='inherit' onClick={handleClick}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
