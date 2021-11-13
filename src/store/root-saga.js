import { all, call } from "redux-saga/effects";
import { categoiresSaga } from "./catrgories/category.saga";

export function* rootSaga() {
  yield all([call(categoiresSaga)]);
}
