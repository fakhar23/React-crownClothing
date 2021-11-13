import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/catrgories/category.action";

import "./shop.style.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // wrap async inside a f unction in useEffect
    const getCategoriesMap = async () => {
      const categoiresArray = await getCategoriesAndDocuments("categories");
      console.log("categoiresArray: ", categoiresArray);
      dispatch(setCategories(categoiresArray));
    };
    // don't forget to call this function
    getCategoriesMap();
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
