import { CHECK_CONNECTION } from './types';
import { NetInfo } from 'react-native';

export const checkConnection = () => {
  return dispatch => {
    NetInfo.isConnected.fetch().then(isConnected => {
      dispatch({
        type: CHECK_CONNECTION,
        payload: isConnected
      });
    });
  };
};
