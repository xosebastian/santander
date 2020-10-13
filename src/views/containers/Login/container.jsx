import { connect } from "react-redux";
import Login from "./login";

import { LoginAction } from "../../../core/meet/actions";

const mapDispatchToProps = {
  LoginAction,
};

export default connect(null, mapDispatchToProps)(Login);
