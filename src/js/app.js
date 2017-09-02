import * as React from 'react';
import { Component }  from 'react';
import ReactDOM from 'react-dom';
// import "babel-polyfill";
import { Provider } from 'react-redux';

import CounterAppContainer from './containers/counterAppContainer';
import configureStore from './redux/configureStore';
const store = configureStore();



// import Utils from "./classes/Utils";
// console.log(  Utils.isProduction() );

// console.log(React);

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <CounterAppContainer />
            </Provider>
        );
    }
}

ReactDOM.render( <App />,document.getElementById('app'));


