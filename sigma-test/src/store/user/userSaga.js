import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./userAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./userActionTypes";
import apiJunction from "../utils/api";
import serverAddress from "../../config";

export function* getUserData() {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: `${serverAddress}/api/users.json`,
    });
    console.log(result);
    if (result) {
      yield put(ACTIONS.getUserDataSuccess(result.data.data));
    }
  } catch (e) {
    yield put(ACTIONS.getUserDataError(e.response));
  }
}

export function* UserSaga() {
  yield takeLatest(TYPES.GET_USER, getUserData);
}
