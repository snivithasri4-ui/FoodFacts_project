
import FoodCard from './FoodCard.jsx'

function FoodList({ products }) {
  return (
    <div className="food-list">
      {products.map((product) => (
        <FoodCard key={product.code} product={product} />
      ))}
    </div>
  )
}

export default FoodList
