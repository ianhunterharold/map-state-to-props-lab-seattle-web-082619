import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>user={user.username}</li>)
    // console.losg(numberOfUsers,"number of users")
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
