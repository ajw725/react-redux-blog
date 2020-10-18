import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './actionTypes';

export default () => async (dispatch) => {
  try {
    const resp = await jsonPlaceholder.get('/posts');
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: resp,
    });
  } catch (error) {
    console.error('Error fetching posts', error);
    dispatch({
      type: FETCH_POSTS_ERROR,
      payload: { error: error },
    });
  }
};
