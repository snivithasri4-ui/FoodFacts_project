import { AppBar, Toolbar, Button, Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const count = useSelector(state => state.saved.items.length);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={NavLink} to="/" color="inherit">
          Home
        </Button>

        <Button component={NavLink} to="/saved" color="inherit">
          <Badge badgeContent={count} color="secondary">
            Saved
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
}