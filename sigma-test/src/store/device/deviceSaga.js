import { call, put } from "redux-saga/effects";
import * as ACTIONS from "./deviceAction";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./deviceActionTypes";
import apiJunction from "../utils/api";
import serverAddress from "../../config";

export function* getDeviceData() {
  try {
    const result = yield call(apiJunction.makeRequest, {
      method: "get",
      url: `${serverAddress}/api/devices.json`,
    });
    console.log(result);
    if (result) {
      yield put(ACTIONS.getDeviceDataSuccess(result.data.data));
    }
  } catch (e) {
    yield put(ACTIONS.getDeviceDataError(e.response));
  }
}

export function* DeviceSaga() {
  yield takeLatest(TYPES.GET_DEVICE, getDeviceData);
}
