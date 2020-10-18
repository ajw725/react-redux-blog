import _ from 'lodash';

import fetchPosts from './fetchPosts';
import fetchUser from './fetchUser';

export default () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const posts = getState().posts;
  if (posts.data) {
    const userIds = _.uniq(_.map(posts.data, 'userId'));
    userIds.forEach((id) => dispatch(fetchUser(id)));
  }
};
