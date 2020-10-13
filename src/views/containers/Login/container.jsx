import { connect } from "react-redux";
import Login from "./login";
import { LoginAction } from "../../../core/meet/actions";
import { getAuthError } from "../../../core/meet/selector";

const mapStateToProps = (state) => ({
  authError: getAuthError(state),
  state: state,
});

const mapDispatchToProps = {
  LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
