/**
 * Refs: https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a
 *       https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
 *       https://github.com/reactjs
 *       https://github.com/ReactTraining
 *       https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
 *       https://medium.com/@luigiplr/react-redux-react-router-4-code-splitting-w-rxjs-webpack-32eabedf0e9
 */
import { Provider } from 'react-redux';
import React from "react";
import ReactDOM from "react-dom";
//import * as actions from "./actions";
import configureStore from "./store";
import App from "./components/App";

import { BrowserRouter, Route } from "react-router-dom";

import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Route exact path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);