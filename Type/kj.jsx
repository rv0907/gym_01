import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import "./ScrollingMenu.css";

const imageUrlMap = {
  back: "image/Back.png",
  "upper legs": "image/dumbbell.png",
  waist: "image/muscle.png",
  "upper arms": "image/muscle100.png",
  shoulders: "image/fitness.png",
  neck: "image/weightlifting.png",
  "lower legs": "image/lowerleg.png",
  "lower arms": "image/chest-press.png",
  chest: "image/Chest.png",
  cardio: "image/dumbbell.png",
};

const ScrollingMenu = ({ data, setbodypart, bodypart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => {
        const imageUrl = imageUrlMap[item.id || item];
        return (
          <Box
            type='button'
            width='200px'
            height='230px'
            key={item.id || item}
            m='10px'
            sx={{
              cursor: "pointer",
              boxShadow: 3,

              backgroundColor: "whitesmoke",
              borderRadius: "20px",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-10px) scale(1.05)",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
            onClick={() => {
              console.log(bodypart, "1");
              setbodypart(item);
              console.log(item, "2");
              window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}
          >
            <Card
              variant='elevation'
              itemID={item.id || item}
              title={item.id || item}
            >
              <CardContent
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: "26px",
                  textTransform: "capitalize",
                  color: "red",
                  fontWeight: 700,
                  ":hover": {
                    backgroundColor: "red",
                    color: "black",
                    borderStyle: "dashed",
                    borderRadius: "100px",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 140,
                    marginBottom: "20px",
                  }}
                  image={imageUrl}
                />
                {item}
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default ScrollingMenu;
