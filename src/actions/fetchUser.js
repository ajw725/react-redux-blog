import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './actionTypes';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

const _fetchUser = _.memoize(async (id, dispatch) => {
  try {
    console.log(`fetching user ${id}`);
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
});

const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

export default fetchUser;
