import React from "react";
import { useState } from "react"; // import state
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Typography, Box } from "@mui/material";

import "./Header.css";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const userName = localStorage.getItem("userEmail");
  return (
    <>
      <Box sx={{ p: 6, backgroundColor: "#f8f8f8" }}>
        <Box>
          <Box mb={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
              p={2}
            >
              <Typography variant="h2" className="text-4xl p-3">
                All Images
              </Typography>
              <Box sx={{ letterSpacing: 6 }}>PHOTOGRAPHY</Box>
            </Box>
          </Box>

          {/*  MOBILE-MENU */}
          <MobileMenu
            setIsNavOpen={setIsNavOpen}
            isNavOpen={isNavOpen}
            userName={userName}
          />

          <Box
            sx={{ fontStyle: "italic", display: { xs: "none", lg: "flex" } }}
            justifyContent="space-around"
            className=" font-hairline font-serif"
          >
            <div>Pregnancy</div>
            <div>Babies</div>
            <div>Family</div>
            <div>Bio</div>
            <div>Book Session</div>
            <div>{!userName ? <Link to="/login">Log In</Link> : userName}</div>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;
