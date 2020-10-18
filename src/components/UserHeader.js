import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    return (
      <div className="header">
        {this.props.user ? this.props.user.name : 'Loading...'}
      </div>
    );
  }
}

const mapStateToProps = ({ users }, ownProps) => {
  const user = users.find((u) => u.id === ownProps.userId);
  return { user: user };
};

export default connect(mapStateToProps)(UserHeader);
