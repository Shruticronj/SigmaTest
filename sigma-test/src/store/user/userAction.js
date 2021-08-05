import * as types from "./userActionTypes";

export function getUserData() {
  return {
    type: types.GET_USER,
  };
}
export function getUserDataSuccess(payload) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: payload,
  };
}
export function getUserDataError(error) {
  return {
    type: types.GET_USER_ERROR,
    payload: error,
  };
}
