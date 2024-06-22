import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = ({ instructions, setinstruction }) => {
  const [exercise, setExercises] = useState([]);
  const [bodypart, setbodypart] = useState("all");

  return (
    <>
      <Box>
        <HeroBanner />
        <SearchExercises
          //exercise={exercise}
          setExercises={setExercises}
          setbodypart={setbodypart}
          bodypart={bodypart}
        />
        <Exercises
          exercise={exercise}
          setExercises={setExercises}
          // setbodypart={setbodypart}
          bodypart={bodypart}
          instructions={instructions}
          setinstruction={setinstruction}
        />
      </Box>
    </>
  );
};

export default Home;
