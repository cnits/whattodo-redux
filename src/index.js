import { Provider } from 'react-redux';
import React from "react";
import ReactDOM from "react-dom";
import * as actions from "./actions";
import configureStore from "./store";
import App from "./components/App";

const store = configureStore();
store.dispatch(actions.ActApp.switchRegister());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);