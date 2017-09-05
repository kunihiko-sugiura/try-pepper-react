import { connect } from 'react-redux';
import View from '../views/CounterApp';
// ** Import Action Creators
import {
    incrementNumber,
    incrementNumberAsync,
    decrementNumber
} from '../redux/modules/ModuleCounterApp';

/**
 *
 * @param state
 * @returns {{counterApp: *}}
 */
function mapStateToProps(state) {
    return {
        counterApp: state.counterApp
    }
}

/**
 * Redux.Dispatch functionをReact.Componentのpropsにmapする
 *
 * @param dispatch
 * @returns {{onIncrementNumber: (function(*=): *), onDecrementNumber: (function(*=): *)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        onIncrementNumberAsync: (value) => dispatch(incrementNumberAsync(value)),
        onIncrementNumber: (value) => dispatch(incrementNumber(value)),
        onDecrementNumber: (value) => dispatch(decrementNumber(value))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);