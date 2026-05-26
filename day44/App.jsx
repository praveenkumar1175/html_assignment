import { Box } from "@mui/material";

import LoginForm from "./LoginForm";
import ProductCard from "./ProductCard";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
      }}
    >

      <LoginForm />

      <ProductCard />

    </Box>
  );
}

export default App;