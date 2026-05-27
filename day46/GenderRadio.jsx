import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

function GenderRadio({ gender, handleGenderChange, darkMode }) {
  return (
    <FormControl>

      <FormLabel
        sx={{
          color: darkMode ? "white" : "black",
          mb: 2,
        }}
      >
        Gender
      </FormLabel>

      <RadioGroup
        value={gender}
        onChange={handleGenderChange}
      >

        <FormControlLabel
          value="Male"
          control={<Radio />}
          label="Male"
        />

        <FormControlLabel
          value="Female"
          control={<Radio />}
          label="Female"
        />

      </RadioGroup>

      <Typography sx={{ mt: 2 }}>
        Selected Gender: {gender}
      </Typography>

    </FormControl>
  );
}

export default GenderRadio;