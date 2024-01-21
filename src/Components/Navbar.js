import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
const StyledAppBar = styled(AppBar)({
  position: "fixed",
  width: "100%",
  zIndex: 1000,
  marginBottom:'200px',
});
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <StyledAppBar>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
      
        <Typography variant='h6' component='div' onClick={()=>navigate('/home')} style={{cursor:"pointer"}}>
          EventBuddy
        </Typography>
      
        
        <div style={{ display: "flex", alignItems: "center" }} onClick={()=>navigate('/user')}>
          <IconButton color='inherit'>
            <AccountCircleIcon />
          </IconButton>
        </div>


      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
