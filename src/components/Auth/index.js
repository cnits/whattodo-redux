import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Auth from "./Auth";
import * as actions from "./../../actions";

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onSignin: () => {
            //dispatch();
        },
        onSignout: () => {

        },
        onSwitchSignin: () => {
            dispatch(actions.ActApp.switchSignin());
        },
        onSwitchRegister: () => {
            dispatch(actions.ActApp.switchRegister());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);