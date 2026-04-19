import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FoodCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ margin: 1, cursor: "pointer" }}
      onClick={() => navigate(`/product/${product.code}`)}
    >
      <CardContent>
        <Typography variant="h6">
          {product.product_name || "No Name"}
        </Typography>

        <Typography color="text.secondary">
          {product.brands || "Unknown"}
        </Typography>
      </CardContent>
    </Card>
  );
}