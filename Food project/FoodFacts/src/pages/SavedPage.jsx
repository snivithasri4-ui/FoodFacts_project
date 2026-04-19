import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/savedSlice";
import FoodCard from "../components/FoodCard";
import { Grid, Button } from "@mui/material";

export default function SavedPage() {
  const saved = useSelector(state => state.saved.items);
  const dispatch = useDispatch();

  if (saved.length === 0) return <h2>No saved items</h2>;

  return (
    <div>
      <h2 style={{ margin: "20px" }}>Saved Items</h2>

      <Grid container spacing={2}>
        {saved.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.code}>
            
            {/* reuse FoodCard */}
            <FoodCard product={item} />

            {/* remove button */}
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(removeItem(item.code))}
              sx={{ mt: 1 }}
            >
              Remove
            </Button>

          </Grid>
        ))}
      </Grid>
    </div>
  );
}