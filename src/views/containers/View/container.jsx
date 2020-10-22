import { connect } from "react-redux";
import View from "./View";
import { setGuestAction } from "../../../core/meet/actions";
import { getAuth, getMeet } from "../../../core/meet/selector";

const mapStateToProps = (state) => ({
  auth: getAuth(state),
  meet: getMeet(state), 
});

const mapDispatchToProps = {
  setGuestAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
