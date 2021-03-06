import {
  GET_USER_SESSIONS, LOGIN, CREATE_ACCOUNT, CLEAR_STATE
} from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  sessions: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        sessions: action.payload.activeSessions,
        id: action.payload._id
      };
      case GET_USER_SESSIONS:
        return {
          ...state,
          sessions: action.payload.sessions,
        };
    case CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};