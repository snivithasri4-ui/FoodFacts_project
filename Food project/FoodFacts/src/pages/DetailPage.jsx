import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        );

        if (!cancelled) {
          setProduct(res.data.product);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [barcode]);

  const isSaved = saved.some((p) => p.code === barcode);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      {loading && <p>Loading...</p>}

      {product && (
        <div>
          <h2>{product.product_name}</h2>

          <button
            onClick={() =>
              dispatch({
                type: isSaved ? "REMOVE" : "ADD",
                product: product,
                code: barcode,
              })
            }
          >
            {isSaved ? "Remove" : "Save"}
          </button>
        </div>
      )}
    </div>
  );
}