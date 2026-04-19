import { useNavigate } from "react-router-dom";

export default function FoodCard({ product }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${product.code}`)} className="card">
      <h3>{product.product_name || "No Name"}</h3>
      <p>{product.brands}</p>
    </div>
  );
}