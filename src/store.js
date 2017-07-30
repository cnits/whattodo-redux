import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

const logger = createLogger();
const history = createHistory();
const _routerMiddleware = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(thunk, logger, _routerMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}