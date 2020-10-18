import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './actionTypes';
import jsonPlaceholder from '../apis/jsonPlaceholder';

const fetchUser = (id) => async (dispatch) => {
  try {
    const resp = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: resp.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER_ERROR,
      payload: { error: error },
    });
  }
};

export default fetchUser;
