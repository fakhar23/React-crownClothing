import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.style.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="produts-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
