import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";

export default function MobileMenu(props) {
  return (
    <Box
      sx={{ display: { xs: "flex", lg: "none" } }}
      justifyContent="end"
      data-testid="MobileMenu"
    >
      <Box
        height={20}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 30,
        }}
        onClick={() => props.setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
      >
        <Box height={0.1} bgcolor="gray"></Box>
        <Box height={0.1} bgcolor="gray"></Box>
        <Box height={0.1} bgcolor="gray"></Box>
      </Box>

      <div className={props.isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        {" "}
        <Box
          sx={{ position: "absolute", top: "0", right: "0" }}
          p={8}
          className="CROSS-ICON"
          onClick={() => props.setIsNavOpen(false)} // change isNavOpen state to false to close the menu
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText align="center" primary="Pregnancy" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText align="center" primary="Babies" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText align="center" primary="Family" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText align="center" primary="Bio" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText align="center" primary="Book Session" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            {!props.userName ? (
              <ListItemButton component="a" href="/login">
                {/* <ListItemText align="center" primary="Log In" /> */}
                <Link to="/login">Log In</Link>
              </ListItemButton>
            ) : (
              <ListItemButton component="a" href="#">
                <ListItemText align="center" primary={props.userName} />
              </ListItemButton>
            )}
          </ListItem>
        </List>
      </div>
    </Box>
  );
}
