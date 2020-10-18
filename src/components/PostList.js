import React from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPosts() {
    if (this.props.posts.error) {
      return (
        <div>
          <h3>Error fetching posts!</h3>
          <p>{this.props.posts.error.toString()}</p>
        </div>
      );
    } else if (this.props.posts.data) {
      return this.props.posts.data.map((post) => {
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderPosts()}</div>;
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
