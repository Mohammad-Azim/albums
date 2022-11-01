import React from "react";
import "font-awesome/css/font-awesome.min.css";

import { Box, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <Box
        data-testid="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          backgroundColor: "rgba(243, 244, 246,0.3)",
          width: 1,
          p: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "175px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
            <span>
              <FacebookIcon></FacebookIcon>
            </span>
            <span>
              <TwitterIcon></TwitterIcon>
            </span>
            <span>
              <PinterestIcon></PinterestIcon>
            </span>
            <span>
              <InstagramIcon></InstagramIcon>
            </span>
          </Box>
          <Typography
            data-testid="copyRight"
            sx={{ fontSize: "1rem", color: "gray", textAlign: "center" }}
          >
            &copy; with love by moha
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
