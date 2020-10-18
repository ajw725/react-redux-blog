import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions/actionTypes';

export default (initialState = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      console.log('fetched posts');
      return action.payload;
    case FETCH_POSTS_ERROR:
      console.log('error fetching posts');
      return action.payload;
    default:
      return initialState;
  }
};
