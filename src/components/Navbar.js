import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="bg-blue-500">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="flex-1">
          Student Management Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
