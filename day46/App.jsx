import { useState } from "react";

import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

import GenderRadio from "./GenderRadio";
import ThemeSwitch from "./ThemeSwitch";

function App() {

  const [gender, setGender] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleThemeChange(event) {
    setDarkMode(event.target.checked);
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4,
      }}
    >

      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: 350,
          borderRadius: 3,
          bgcolor: darkMode ? "#1e1e1e" : "white",
          color: darkMode ? "white" : "black",
        }}
      >

        <GenderRadio
          gender={gender}
          handleGenderChange={handleGenderChange}
          darkMode={darkMode}
        />

        <ThemeSwitch
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
        />

        <Typography sx={{ mt: 3 }}>
          Mode: {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>

      </Paper>

    </Box>
  );
}

export default App;