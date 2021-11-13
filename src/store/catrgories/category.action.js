import { CreateAction } from "../../utils/reducer/reducer.util";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  CreateAction(CATEGORY_ACTION_TYPES.SET_CATEGOIRES, categoriesArray);
