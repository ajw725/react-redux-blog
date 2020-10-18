import _ from 'lodash';

import fetchPosts from './fetchPosts';
import fetchUser from './fetchUser';

export default () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const posts = getState().posts;
  if (posts.data) {
    _.chain(posts.data)
      .map('userId')
      .uniq()
      .forEach((id) => dispatch(fetchUser(id)))
      .value();
  }
};
