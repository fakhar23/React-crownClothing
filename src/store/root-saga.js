import { all, call } from "redux-saga/effects";
import { categoiresSaga } from "./catrgories/category.saga";
import { userSaga } from "./user/user.saga";

export function* rootSaga() {
  console.log("running root saga");
  yield all([call(categoiresSaga), call(userSaga)]);
}
