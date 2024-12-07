import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List className="w-60 bg-gray-100 h-screen">
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Classes" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
