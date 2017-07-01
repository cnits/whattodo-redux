import { connect } from "react-redux";
import CNav from "./Nav";
export default connect(({ data }) => ({ data }))(CNav);