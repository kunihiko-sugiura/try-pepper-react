import * as $ from "jquery";
import React from "react";
import { Component } from 'react';
// import styles from "../../scss/main.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shimTest: JSON.stringify( $.extend( true, {}, { shim: 1}, { test: 2 } ) )
        };
    }
    render() {
        return(
            <div>
            {/*<div style={styles.app}>*/}
                Hello Hello {this.state.shimTest}
            </div>
        );
    }
}
export default App;
