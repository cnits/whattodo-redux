import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state) => {
    return {
        authState: state.authState || state.AppRdrs.authState
    };
}
export default connect(mapStateToProps/*, mapDispatchToProps*/)(App);