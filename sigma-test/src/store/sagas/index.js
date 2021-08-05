import { DeviceSaga } from "../device/deviceSaga";
import { UserSaga } from "../user/userSaga";
import { all } from "redux-saga/effects";

export function* watchSagas() {
  yield all([UserSaga(), DeviceSaga()]);
}
