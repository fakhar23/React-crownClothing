import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";

import { CATEGORY_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  console.log("running fetchCategoriesAsync");
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    console.log("categoriesArray: 💣💣💣💣💣💣💣💣 ", categoriesArray);
    // putt is like generator function of dispatch
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategoires() {
  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoiresSaga() {
  yield all([call(onFetchCategoires)]);
}
