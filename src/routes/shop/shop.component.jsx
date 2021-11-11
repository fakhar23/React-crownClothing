import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.style.scss";
import { Fragment } from "react/cjs/react.production.min";
const Shop = () => {
  return (
    // <> is short hand for fragment
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
