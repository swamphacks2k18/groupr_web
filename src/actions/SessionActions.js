import { GET_SESSIONS } from './types';
import { baseUrl, sessionGetInRadius } from './urls';
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