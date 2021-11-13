import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { setCategories } from "../../store/catrgories/category.action";
import { fetchCategoriesStart } from "../../store/catrgories/category.action";

import "./shop.style.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    // <> is short hand for fragment
    <>
      <Routes>
        <Route index element={<CategoriesPreview />}></Route>
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
