import {GET_SESSIONS, GET_LOCATIONS, CREATE_ACCOUNT} from './types';
import {baseUrl, sessionGetInRadius, getLocationsUrl, sessionJoin, userCreate, sessionCreate, sessionGet} from './urls';
import {GET_USER_SESSIONS} from "./index";
export const getInRadius = (radius) => {
  return async (dispatch) => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      const { latitude, longitude } = position.coords;
      getInRadiusServiceCall(latitude, longitude, radius, dispatch)
        .then(response => {
          console.log(response)
          dispatch({
            type: GET_SESSIONS,
            payload: {
              localSessions: response.localSessions,
              latitude,
              longitude
            }
          });
        });
    });
  };
};

const getInRadiusServiceCall = async (latitude, longitude, radius, dispatch) => {
    const inRangeUrl = `${baseUrl}${sessionGetInRadius}?longitude=${longitude}&latitude=${latitude}&radius=${radius}`;
    console.log(inRangeUrl)
    const json = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch(inRangeUrl, json);
    if (!response.ok) {
      console.log('tw err get in range');
      return;
    }

     return await response.json();
  };

export const joinSession = (sessionId, callback) => {
  return async (dispatch, getState) => {
    const locationsUrl = `${baseUrl}${sessionJoin}`;
    const id = getState().user.id;
    console.log('tw user id', id)
    const json = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        userId: id,
      })
    };
    const response = await fetch(locationsUrl, json);
    if (!response.ok) {
      console.log('tw err join session');
      return;
    }

    const responseJson = await response.json();
    dispatch({
      type: GET_USER_SESSIONS,
      payload: responseJson,
    });
    callback('/groups');
    }
  };

export const getLocations = () => {
  return async (dispatch) => {
    const locationsUrl = `${baseUrl}${getLocationsUrl}`;
    const json = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch(locationsUrl, json);
    if (!response.ok) {
      console.log('tw err get in range');
      return;
    }

    const responseJson = await response.json();
    dispatch({
      type: GET_LOCATIONS,
      payload: {
        localLocations: responseJson.localLocations,
      }
    });
    }
  };

export const sessionCreateServiceCall = (name, _class, description, callback) => {
  return async (dispatch, getState) => {
    const json = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        class: _class,
        description,
        owner: getState().user.name,
        latitude: getState().sessions.latitude,
        longitude: getState().sessions.longitude
      })
    };
    const response = await fetch(`${baseUrl}${sessionCreate}`, json);
    if (!response.ok) {
      console.log('tw err session create');
      return;
    }

    const respJson = await response.json();
    const { name, email, activeSessions, _id } = respJson;
    dispatch({
      type: GET_USER_SESSIONS,
      payload: respJson
    });

    callback();
  }
};
export const sessionGetServiceCall = () => {
  return async (dispatch, getState) => {
    const json = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch(`${baseUrl}${sessionGet}?id=${getState().user.id}`, json);
    if (!response.ok) {
      console.log('tw err session get');
      return;
    }

    const respJson = await response.json();

    dispatch({
      type: GET_USER_SESSIONS,
      payload: respJson
    });
  }
};
