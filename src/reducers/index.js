import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import formReducer from './FormReducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  user: userReducer,
  form: formReducer,
  router: routerReducer
});
