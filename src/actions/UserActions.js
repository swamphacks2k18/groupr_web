import { LOGIN, GET_USER_SESSIONS } from './types';
export const login = (email, password) => {
  return (dispatch, getState) => {
    dispatch({
      type: LOGIN,
      payload: {
        name: 'hello world!'
      }
    });
  }
};