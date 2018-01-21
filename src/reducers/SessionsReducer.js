import {
  GET_SESSIONS,
  CLEAR_STATE,
  GET_LOCATIONS
} from '../actions';

const INITIAL_STATE = {
  sessions: [],
  latitude: 0,
  longitude: 0,
  localLocations: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SESSIONS:
      return {
        ...state,
        sessions: action.payload.localSessions,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };
    case GET_LOCATIONS:
      return {
        ...state,
        localLocations: action.payload.localLocations,
      };
    case CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};