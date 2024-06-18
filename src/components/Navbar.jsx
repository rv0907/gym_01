import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        sx={{
          gap: { sm: "122px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px={"20px"}
      >
        <Link to='/' underline='none'>
          <img
            src={Logo}
            alt='logo'
            style={{ width: "48px", height: "48px", margin: "0 20px" }}
          />
        </Link>
        <Stack
          direction={"row"}
          gap='40px'
          fontSize='24px'
          alignItems={"flex-end"}
        >
          <Link href='#' underline='none'>
            Home
          </Link>
          <a
            href='#exercises'
            style={{
              textDecoration: "none",
              color: "#A91D3A",
              fontSize: "24px",
              fontWeight: "300",
            }}
          >
            Exercise
          </a>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
