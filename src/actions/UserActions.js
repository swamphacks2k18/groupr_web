import { LOGIN, GET_USER_SESSIONS, CREATE_ACCOUNT } from './types';
import { baseUrl, userCreate, userLogin } from './urls';
export const login = (firstName, email, password, callback) => {
  return async (dispatch) => {
    const json = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: firstName,
        email,
        password
      })
    };
    const response = await fetch(`${baseUrl}${userCreate}`, json);
    if (!response.ok) {
      console.log('tw err create');
      return;
    }

    const respJson = await response.json();
    dispatch({
      type: CREATE_ACCOUNT,
      payload: {
        name: respJson.name,
        email: respJson.email,
        sessions: respJson.activeSessions
      }
    });

    callback();
  }
};