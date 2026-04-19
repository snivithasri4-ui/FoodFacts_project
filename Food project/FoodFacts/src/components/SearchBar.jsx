import { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <TextField
        label="Search food"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ ml: 2 }}>
        Search
      </Button>
    </form>
  );
}