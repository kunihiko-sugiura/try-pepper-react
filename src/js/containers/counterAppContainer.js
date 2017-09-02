import { connect } from 'react-redux';
import CounterApp from '../components/CounterApp'
import {
    incrementNumber,
    decrementNumber
} from '../redux/modules/MCounterApp';

function mapStateToProps(state) {
    return {
        counterApp: state.counterApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementNumber: (value) => dispatch(incrementNumber(value)),
        onDecrementNumber: (value) => dispatch(decrementNumber(value))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterApp);