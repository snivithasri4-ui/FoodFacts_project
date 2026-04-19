import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";
import useFoodSearch from "../hooks/useFoodSearch";
import ErrorMessage from "../components/ErrorMessage";

export default function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch();

  return (
    <div>
      <SearchBar onSearch={searchFood} />

      {loading && <p>Loading...</p>}

      {error && <ErrorMessage message={error} />}

      {results.length > 0 && <FoodList products={results} />}
    </div>
  );
}