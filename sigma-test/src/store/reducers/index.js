import { combineReducers } from "redux";
import { UserReducer } from "../user/userReducer";
import { DeviceReducer } from "../device/deviceReducer";

export default combineReducers({
  UserReducer,
  DeviceReducer,
});
