import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchdata, exerciseoptions } from "../utils/fatchdata";

import ScrollingMenu from "../../Type/kj";
const SearchExercises = ({ setExercises, setbodypart, bodypart }) => {
  const [search, setsearch] = useState("");
  const [bodyparts, setbodyparts] = useState([]);
  useEffect(() => {
    async function fetchbodyparts() {
      const bodydata = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseoptions
      );

      setbodyparts(bodydata);
    }
    fetchbodyparts();
  }, []);

  const handler = async () => {
    if (search) {
      const data = await fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=300",
        exerciseoptions
      );

      const info = data.filter((exercise) => {
        const nameIncludes =
          exercise.name && exercise.name.toLowerCase().includes(search);
        const targetIncludes =
          exercise.target && exercise.target.toLowerCase().includes(search);
        const equipmentIncludes =
          exercise.equipment &&
          exercise.equipment.toLowerCase().includes(search);
        const bodypartIncludes =
          exercise.bodyPart && exercise.bodyPart.toLowerCase().includes(search);

        return targetIncludes || equipmentIncludes || bodypartIncludes;
      });
      setsearch("");

      setExercises(info);
    }
  };
  return (
    <>
      <Stack
        alignItems={"center"}
        mt={"37px"}
        justifyContent={"center"}
        p={"20px"}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" }, textAlign: "centre" }}
          mb='50px'
          color={"#A91D3A"}
        >
          Awesome exercise you
          <br />
          Should know
        </Typography>

        <Box
          display='flex'
          textAlign={"center"}
          sx={{ ml: { xs: "0px", sm: "40px", lg: "150px" } }}
        >
          <TextField
            className='button-ip'
            fullWidth
            value={search}
            onChange={(e) => {
              setsearch(e.target.value.toLowerCase());
            }}
            type={"text"}
            placeholder='Search Exercises'
            sx={{
              input: {
                fontWeight: "680",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "rosybrown",
              },
              width: { xs: "320px", lg: "1150px", sm: "600px" },
              borderRadius: "40px",
              height: "76px",
            }}
          ></TextField>
          <Button
            variant='outlined'
            type='submit'
            sx={{
              color: "blue",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "relative",
              right: "0",
            }}
            onClick={handler}
          >
            Search
          </Button>
        </Box>

        <ScrollingMenu
          data={bodyparts}
          bodyParts
          setbodypart={setbodypart}
          bodypart={bodypart}
        />
      </Stack>
      {/* </Stack> */}
    </>
  );
};

export default SearchExercises;
