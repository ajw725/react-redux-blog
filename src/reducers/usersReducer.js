import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return [...users, action.payload];
    case FETCH_USER_ERROR:
      console.error('error fetching user', action.payload.error);
      alert(action.payload.error);
      return users;
    default:
      return users;
  }
};
