import { act } from "react-dom/test-utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

const CATEGORIES_INTIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = CATEGORIES_INTIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGOIRES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
