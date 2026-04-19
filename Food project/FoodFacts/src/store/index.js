import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "./savedSlice";

export const store = configureStore({
  reducer: {
    saved: savedReducer,
  },
});

// localStorage save
store.subscribe(() => {
  localStorage.setItem(
    "foodfacts-saved",
    JSON.stringify(store.getState().saved.items)
  );
});