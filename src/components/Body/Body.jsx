import React from "react";
import { suspend } from "suspend-react";
import { useEffect, useState } from "react";
import { makeStyles, Grid } from "@mui/material";
import { Box } from "@mui/system";

function Body() {
  let currentOffset = 12;
  const [image, setImage] = useState([]);

  const loadTenLine = () => {
    setImage((image) => [
      ...image,
      ...data.slice(currentOffset, currentOffset + 12),
    ]);
    currentOffset += 12;
  };

  const data = suspend(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    return res.json();
  }, []);

  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadTenLine();

      console.log("end of the page");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    setImage(data.slice(0, 12));
  }, [data]);

  return (
    <>
      <Box sx={{ mt: 6, mb: 24 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {image.map((post) => (
            <Grid item xs={4} key={post.id}>
              <img src={post.url} className="" alt="Logo" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Body;
