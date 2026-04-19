import { useState } from "react";
import axios from "axios";

export default function useFoodSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchFood = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        "https://world.openfoodfacts.org/cgi/search.pl",
        {
          params: {
            search_terms: query,
            json: true,
          },
        }
      );

      setResults(res.data.products.slice(0, 20));
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, searchFood };
}