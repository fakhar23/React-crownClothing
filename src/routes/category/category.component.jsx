import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log("categoriesMap[category]: ", categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="category-container">
      {/* products && is used because products are obtainef from async call and at first load there is no products so at first load there will be error of .map on undefined */}
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default Category;
