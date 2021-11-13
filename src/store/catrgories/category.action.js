import { CreateAction } from "../../utils/reducer/reducer.util";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoiresArray) =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoiresArray);
export const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
