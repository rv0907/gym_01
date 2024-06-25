import React from "react";
import { Button, Box, Typography, Grid } from "@mui/material";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
} from "@mui/material";

const ExerciseCard = ({ exercisee, instructions, setinstruction }) => {
  return (
    <Card
      variant='outlined'
      sx={{
        cursor: "pointer",
        boxShadow: 3,

        backgroundColor: "whitesmoke",
        borderRadius: "20px",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-10px) scale(1.05)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          bgcolor: "ActiveBorder",
          color: "HighlightText",
        },
      }}
    >
      <CardActions
        src={`/exercise/${exercisee.id}`}
        onClick={() => {
          setinstruction(exercisee.instructions);
          console.log(instructions);
        }}
      >
        <CardContent
          key={exercisee.id}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            sx={{
              height: 240,
              width: 230,
              marginBottom: "20px",
            }}
            image={exercisee.gifUrl}
          />
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#fcc757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercisee.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#00c757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercisee.target}
          </Button>
          <Typography
            ml='0px'
            width={"230px"}
            color={"#000"}
            fontWeight={"bold"}
            mt='11px'
            pb='10px'
            textTransform={"capitalize"}
            fontSize={"18px"}
          >
            {exercisee.name}
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
};

export default ExerciseCard;
