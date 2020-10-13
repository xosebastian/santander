import { connect } from "react-redux";
import Create from "./create";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
