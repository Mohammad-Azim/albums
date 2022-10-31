import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Body from "../../components/Body/Body";
import { Suspense } from "react";
import { CircularProgress, Box } from "@mui/material";

function Home(props) {
  return (
    <>
      <Header />

      <Suspense
        fallback={
          <Box sx={{ display: "flex", width: 1, mt: 5 }}>
            <CircularProgress sx={{ mx: "auto" }} />
          </Box>
        }
      >
        <Body />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
