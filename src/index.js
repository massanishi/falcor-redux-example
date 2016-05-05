import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import { Model } from 'falcor';
// import { FalcorProvider } from 'redux-falcor';
import { createStore } from "redux";
import AppContainer from "./AppContainer";
import { Router, Route } from "react-router";
// import { retrievePath } from "redux-falcor";
import reducer from "./reducer";

// Create Store
const store = createStore(reducer);

// const model = new Model();

// // Load initial values into store
// store.dispatch(retrievePath("title"))
// store.dispatch(retrievePath("user"))

// Render App
render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>
, document.getElementById("app"));
