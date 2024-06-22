import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollingMenu from "../Type/kj";
function App() {
  const [instructions, setinstruction] = useState("");
  return (
    <>
      <Router>
        <Box width='400px' sx={{ width: { xl: "1488px" } }} m='auto'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  instructions={instructions}
                  setinstruction={setinstruction}
                />
              }
            />
            <Route
              path='\pages\ExerciseDetails.jsx'
              element={
                <ExerciseDetail
                  instructions={instructions}
                  setinstruction={setinstruction}
                />
              }
            />
          </Routes>

          <Footer />
        </Box>
      </Router>
    </>
  );
}

export default App;
