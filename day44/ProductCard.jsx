import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

function ProductCard() {
  return (
    <Card
      sx={{
        width: 320,
        borderRadius: 3,
        boxShadow: 4,
      }}
    >

      <CardHeader
        title="Wireless Headphones"
        subheader="Best Audio Quality"
      />

      <CardContent>

        <Typography variant="body1" color="text.secondary">
          Enjoy crystal clear sound with long battery life and comfortable design.
        </Typography>

        <Typography
          variant="h6"
          color="secondary"
          sx={{ mt: 2 }}
        >
          ₹2999
        </Typography>

      </CardContent>

      <CardActions sx={{ p: 2 }}>

        <Button variant="contained" color="primary">
          Buy Now
        </Button>

        <Button variant="outlined" color="secondary">
          Add to Cart
        </Button>

      </CardActions>

    </Card>
  );
}

export default ProductCard;