import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Typography, Stack } from "@mui/material";
import { exerciseoptions, fetchdata } from "../utils/fatchdata";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercise, setExercises, bodypart }) => {
  const [currentPage, setCurrentpage] = useState(1);
  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexoffirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercise = exercise.slice(
    indexoffirstExercise,
    indexOfLastExercise
  );
  console.log(bodypart, "3");
  const paginate = (event, value) => {
    setCurrentpage(value);
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchbodyData = async () => {
      let exercisedata = [];
      if (bodypart === "all") {
        exercisedata = await fetchdata(
          "https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=300",
          exerciseoptions
        );
      } else {
        exercisedata = await fetchdata(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}?offset=0&limit=300`,
          exerciseoptions
        );
      }
      setExercises(exercisedata);
    };
    fetchbodyData();
  }, [bodypart]);
  return (
    <Box id='exercises' sx={{ mt: { lg: "110px" } }} mt='50px' p='20px'>
      <Stack
        direction={"row"}
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {currentExercise.map((exercisee, index) => (
          <ExerciseCard key={index} exercisee={exercisee} />
        ))}
      </Stack>
      <Stack
        direction={"row"}
        mt='100px'
        alignItems={"centre"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        {exercise.length > 9 && (
          <Pagination
            // sx={{ ml: "230px" }}
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercise.length / 9)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
