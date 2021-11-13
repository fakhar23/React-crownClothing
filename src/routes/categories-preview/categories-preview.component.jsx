import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/catrgories/category.selector";

import Spinner from "../../components/spinner/spinner.component";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./categories-preview.style.scss";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    // <> is short hand for fragment
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="categorgy-preview-container">
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CategoriesPreview;
