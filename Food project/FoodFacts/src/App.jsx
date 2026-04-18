import React, { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import FoodList from './components/FoodList.jsx'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    if (!query) return
    setLoading(true)
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1`
      )
      const data = await response.json()
      const filtered = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ''
      )
      setResults(filtered)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>FoodFacts app</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p>Search for a food to see nutrition info.</p>
      )}

      {!loading && results.length > 0 && (
        <FoodList products={results} />
      )}

      {!loading && results.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  )
}

export default App
