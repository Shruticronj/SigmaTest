import * as types from "./userActionTypes";

const INITIAL_STATE = {
  isUserDataFetched: false,
  isUserLoading: false,
  isUserDataError: false,
  userData: [],
};

export function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        isUserDataFetched: false,
        isUserDataError: false,
        isUserLoading: true,
        userData: [],
      };

    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isUserDataError: false,
        isUserDataFetched: true,
        isUserLoading: false,
        userData: action.payload,
      };

    case types.GET_USER_ERROR:
      return {
        ...state,
        isUserDataError: true,
        isUserDataFetched: false,
        isUserLoading: false,
        userData: [],
      };

    default:
      return state;
  }
}
