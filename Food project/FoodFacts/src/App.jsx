import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SavedPage from "./pages/SavedPage";
import NavBar from "./components/NavBar";
 feature/foodfacts-part3


function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.find((p) => p.code === action.product.code)) return state;
      return [...state, action.product];

    case "REMOVE":
      return state.filter((p) => p.code !== action.code);

    default:
      return state;
  }
}

function App() {
  const [saved, dispatch] = useReducer(reducer, []);
 main

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:barcode" element={<DetailPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </>
  );
}