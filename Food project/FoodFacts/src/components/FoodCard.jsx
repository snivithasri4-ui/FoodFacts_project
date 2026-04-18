

function FoodCard({ product }) {
  return (
    <div className="food-card">
      <img
        src={product.image_small_url || 'https://via.placeholder.com/100'}
        alt={product.product_name}
      />
      <h3>{product.product_name}</h3>
      <p>{product.brands || 'Unknown brand'}</p>
      <ul>
        <li>Calories: {product.nutriments?.['energy-kcal_100g'] ?? 'N/A'}</li>
        <li>Protein: {product.nutriments?.proteins_100g ?? 'N/A'} g</li>
        <li>Carbs: {product.nutriments?.carbohydrates_100g ?? 'N/A'} g</li>
        <li>Fat: {product.nutriments?.fat_100g ?? 'N/A'} g</li>
      </ul>
    </div>
  )
}

export default FoodCard
