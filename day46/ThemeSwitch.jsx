import {
  Box,
  Typography,
  Switch,
} from "@mui/material";

function ThemeSwitch({ darkMode, handleThemeChange }) {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >

      <Typography>
        Light
      </Typography>

      <Switch
        checked={darkMode}
        onChange={handleThemeChange}
      />

      <Typography>
        Dark
      </Typography>

    </Box>
  );
}

export default ThemeSwitch;