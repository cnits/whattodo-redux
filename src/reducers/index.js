import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import AppRdrs from './AppRdrs';
import ContactRdrs from "./ContactRdrs";

export default combineReducers({
    AppRdrs,
    ContactRdrs,
    routing: routerReducer
});