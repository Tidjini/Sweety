import { Actions } from "react-native-router-flux";
import { ENTER_DETAILS } from "./types";

export const details = id => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ENTER_DETAILS, payload: id });
      Actions.productDetails();
    }, 50);
  };
};
