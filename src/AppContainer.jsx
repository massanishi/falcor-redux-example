import React, { Component } from 'react';
import * as actions from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AppContainer extends Component {
  // fetchFalcorDeps() {
  //   // return this.props.falcor.get(
  //   //   ['currentUser', App.queries.user()],
  //   // );
  // }

  componentWillMount() {
    this.props.actions.getTitle();
  }

  render() {
    return <p>HI</p>
  }
}


function mapStateToProps(state) {
  return {
    // counter: state.counterReducer.get("counter"),
    // title: state.falcorReducer.title,
    // user: state.falcorReducer.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
