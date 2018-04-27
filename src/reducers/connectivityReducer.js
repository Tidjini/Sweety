import { CHECK_CONNECTION } from '../actions/types';

const INITIAL_STATE = {
  isConnected: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case CHECK_CONNECTION:
      return { ...state, isConnected: action.payload };
    default:
      return state;
  }
};
