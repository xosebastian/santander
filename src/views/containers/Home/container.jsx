import { connect } from "react-redux";
import Home from "./home";
import { getMeet } from "../../../core/meet/selector";



const mapStateToProps = (state) => ({
  meet: getMeet(state),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
