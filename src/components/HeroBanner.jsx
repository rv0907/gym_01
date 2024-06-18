import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import "../App.css";
const HeroBanner = () => {
  return (
    <>
      <Box
        sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
        position={"relative"}
        p={"26px"}
      >
        <Typography color={"#A91D3A"} fontWeight={"600"} fontSize={"26px"}>
          Fitness club
        </Typography>
        <Typography
          color={"rosybrown"}
          fontWeight={"700"}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mt='20px'
        >
          Smile ,Sweat
          <br />
          and Repeat
        </Typography>
        <Typography color='#B09D90' fontSize='22px' lineHeight='35px' mt='20px'>
          Check out the most effective exercises
        </Typography>
        <Button
          variant='outlined'
          color='error'
          sx={{ mt: { lg: "40px", xs: "30px" } }}
          href='#exercises'
        >
          Explore Exercises
        </Button>
        <Typography
          textAlign={"centre"}
          fontWeight={700}
          // fontSize={"1px"}

          sx={{
            color: "blue",
            opacity: 0.13,
            display: { lg: "block", xs: "block " },
            // width: { xs: "300px" },
            fontSize: { xs: "100px", sm: "120px", lg: "180px" },
          }}
        >
          Let's
          <br /> do it..
        </Typography>
        <img src={HeroBannerImage} alt=' hero' className='hero-banner-img' />
      </Box>
    </>
  );
};

export default HeroBanner;
