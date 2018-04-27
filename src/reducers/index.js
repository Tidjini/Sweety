import { combineReducers } from 'redux';
import routerReducer from './routerReducer';
import connectivityReducer from './connectivityReducer';

//this containe all our reducers (function that give us data (states of the application))
export default combineReducers({
  routes: routerReducer,
  connection: connectivityReducer
});
