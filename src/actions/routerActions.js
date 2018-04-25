import { Actions } from "react-native-router-flux";

import {
  START_APP,
  ENTER_MAIN,
  ENTER_DETAILS,
  ENTER_LIST,
  ENTER_LOGIN
} from "./types";

export const start = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: START_APP });
      Actions.wellcome();
    }, 50);
  };
};

export const main = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ENTER_MAIN });
      Actions.mainStack();
    }, 50);
  };
};

export const details = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ENTER_DETAILS });
      Actions.product_details();
    }, 50);
  };
};
export const list = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ENTER_LIST });
      Actions.product_list();
    }, 50);
  };
};

export const login = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ENTER_LOGIN });
      Actions.login_stack();
    }, 50);
  };
};