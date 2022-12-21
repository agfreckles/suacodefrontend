import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { Provider } from "react-redux";

TimeAgo.addDefaultLocale(en);

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
