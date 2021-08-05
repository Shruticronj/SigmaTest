import * as types from "./deviceActionTypes";

export function getDeviceData() {
  return {
    type: types.GET_DEVICE,
  };
}
export function getDeviceDataSuccess(payload) {
  return {
    type: types.GET_DEVICE_SUCCESS,
    payload: payload,
  };
}
export function getDeviceDataError(error) {
  return {
    type: types.GET_DEVICE_ERROR,
    payload: error,
  };
}
