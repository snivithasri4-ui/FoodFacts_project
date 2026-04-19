import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/savedSlice";

export default function DetailPage() {
  const { barcode } = useParams();
  const saved = useSelector(state => state.saved.items);
  const dispatch = useDispatch();

  const isSaved = saved.find(p => p.code === barcode);

  return (
    <div>
      <h2>Product: {barcode}</h2>

      <button
        onClick={() =>
          isSaved
            ? dispatch(removeItem(barcode))
            : dispatch(addItem({ code: barcode }))
        }
      >
        {isSaved ? "Remove" : "Save"}
      </button>
    </div>
  );
}