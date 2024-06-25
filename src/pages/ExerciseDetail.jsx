import React from "react";

const ExerciseDetail = ({ instructions, setinstruction }) => {
  const { id } = useParams();
  console.log(instructions);
  console.log("h");
  return <div>{instructions}</div>;
};

export default ExerciseDetail;
