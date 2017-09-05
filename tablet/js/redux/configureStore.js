import { createStore, applyMiddleware, combineReducers } from 'redux';
import Utils from "../libs/Utils";

// ** Import MiddleWares
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk'
// ** Import Reducers
import reducerCounterApp from './modules/ModuleCounterApp';

// ** apply Middleware
let middlewares = [ thunk ];
if( ! Utils.isProduction() ) {
    middlewares = [ ...middlewares, createLogger() ];
}

// ** Combine Reducers
const reducer = combineReducers({
    counterApp: reducerCounterApp
});

// ** Create Store
const configureStore = (initialState) => createStore(reducer, initialState, applyMiddleware(...middlewares));
export default configureStore;