import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/catrgories/category.selector";

import "./category.style.scss";

const Category = () => {
  const { category } = useParams();

  console.log("rendering/re-redering  category component");

  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log("categoriesMap[category]: ", categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {/* products && is used because products are obtainef from async call and at first load there is no products so at first load there will be error of .map on undefined */}
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

export default Category;
