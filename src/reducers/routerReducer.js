import {
  START_APP,
  ENTER_MAIN,
  ENTER_DETAILS,
  ENTER_LIST,
  ENTER_LOGIN
} from "../actions/types";

const INITIAL_STATE = {
  start: "",
  main: "",
  list: "",
  details: "",
  login: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_APP:
      return { ...state, start: "start" };
    case ENTER_LOGIN:
      return { ...state, login: "login" };
    case ENTER_MAIN:
      return { ...state, main: "main" };
    case ENTER_LIST:
      return { ...state, list: "list" };
    case ENTER_DETAILS:
      return { ...state, details: "details" };
    default:
      return state;
  }
};
