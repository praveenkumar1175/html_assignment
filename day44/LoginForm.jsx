import { Box, TextField, Button, Typography } from "@mui/material";

function LoginForm() {
  return (
    <Box
      component="form"
      sx={{
        width: 350,
        bgcolor: "white",
        p: 4,
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >

      <Typography variant="h5" fontWeight="bold">
        Login Form
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
      >
        Login
      </Button>

    </Box>
  );
}

export default LoginForm;