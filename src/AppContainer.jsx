import React, { Component } from 'react';
import * as actions from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AppContainer extends Component {
  componentWillMount() {
    this.props.actions.getUser();
  }

  render() {
    const { users } = this.props;
    console.log('users', users);
    return <p>HI</p>
  }
}


function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
