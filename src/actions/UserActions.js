import { LOGIN, GET_USER_SESSIONS, CREATE_ACCOUNT } from './types';
import { baseUrl, userCreate, userLogin } from './urls';
export const login = (firstName, email, password, callback) => {
  const _email = email;
  return async (dispatch) => {
    const json = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: firstName,
        email: _email,
        password
      })
    };
    const response = await fetch(`${baseUrl}${userCreate}`, json);
    if (!response.ok) {
      console.log('tw err create');
      return;
    }

    const respJson = await response.json();
    console.log('tw create', respJson)
    const { name, email, activeSessions, _id } = respJson;
    dispatch({
      type: CREATE_ACCOUNT,
      payload: {
        name,
        email,
        sessions: activeSessions,
        _id,
      },
    });

    callback();
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}