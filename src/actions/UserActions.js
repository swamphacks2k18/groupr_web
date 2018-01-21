import { LOGIN, GET_USER_SESSIONS } from './types';
export const login = (email, password) => {
  return async (dispatch, getState) => {

    dispatch({
      type: LOGIN,
      payload: {
        name: 'hello world!'
      }
    });
  }
};