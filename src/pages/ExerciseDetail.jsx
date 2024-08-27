import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { exerciseoptions, fetchdata, youtubeOptions } from "../utils/fatchdata";
const ExerciseDetail = ({ instructions, setinstruction }) => {
  const { id } = useParams();
  const [exercisedetail, setexercisedetail] = useState("");

  useEffect(() => {
    const fetchExercisesData = async () => {
      const detail = await fetchdata(
        `https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0`,
        exerciseoptions
      );

      console.log(id);
      const repo = detail.filter((f) => {
        return f.find(id).instructions;
      });
      console.log(repo);
      setexercisedetail(repo.instructions);
    };
    // console.log(exercisedetail);
    fetchExercisesData();
  }, [id]);
  return (
    <Box width={"200px"}>
      <Typography
        fontSize={"26px"}
        gap={2}
        sx={{ border: "2px red solid", width: { lg: "300px", sm: "content" } }}
      >
        {/* {exercisedetail} */}hi
      </Typography>
    </Box>
  );
};

export default ExerciseDetail;
