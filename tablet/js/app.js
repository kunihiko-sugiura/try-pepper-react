import "babel-polyfill";
import ConfEnv from "./config/env";

import * as React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import ContainerCounterApp from './containers/CounterApp';

import configureStore from './redux/configureStore';
// ** Initial State
const store = configureStore();

// ** Pepper Session Start
import PepperSession from "./libs/PepperSession";
PepperSession.start(ConfEnv.pepperHost, () => {  });

// ** Application Root Component
class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <ContainerCounterApp />
            </Provider>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
