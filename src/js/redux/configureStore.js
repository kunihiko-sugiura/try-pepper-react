import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import counterApp from './modules/MCounterApp';

// ** initialize logger
const loggerMw = createLogger();
// ** apply Middleware
const createStoreWithMiddleware = applyMiddleware(
    // [! Utils.isProduction() && loggerMw]
    loggerMw
)(createStore);

const reducer = combineReducers({
    counterApp: counterApp
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;