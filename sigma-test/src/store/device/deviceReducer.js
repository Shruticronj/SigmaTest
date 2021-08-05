import * as types from "./deviceActionTypes";

const INITIAL_STATE = {
  isDeviceDataFetched: false,
  isDeviceLoading: false,
  isDeviceDataError: false,
  deviceData: [],
};

export function DeviceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_DEVICE:
      return {
        ...state,
        isDeviceDataFetched: false,
        isDeviceLoading: true,
        isDeviceDataError: false,
        deviceData: [],
      };

    case types.GET_DEVICE_SUCCESS:
      return {
        ...state,
        isDeviceDataFetched: true,
        isDeviceDataError: false,
        isDeviceLoading: false,
        deviceData: action.payload,
      };

    case types.GET_DEVICE_ERROR:
      return {
        ...state,
        isDeviceDataError: true,
        isDeviceDataFetched: false,
        isDeviceLoading: false,
        deviceData: [],
      };

    default:
      return state;
  }
}
