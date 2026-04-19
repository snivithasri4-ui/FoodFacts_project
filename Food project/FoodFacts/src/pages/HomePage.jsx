import SearchBar from "../components/SearchBar";
import FoodList from "../components/FoodList";
import useFoodSearch from "../hooks/useFoodSearch";

export default function HomePage() {
  const { results, loading, searchFood } = useFoodSearch();

  return (
    <div>
      <SearchBar onSearch={searchFood} />
      {loading && <p>Loading...</p>}
      <FoodList products={results} />
    </div>
  );
}