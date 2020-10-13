import { connect } from "react-redux";
import Home from "./home";


const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
