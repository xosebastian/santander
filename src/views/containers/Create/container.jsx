import { connect } from "react-redux";
import Create from "./create";
import { getWeatherAction, getBeerAction, setMeetAction } from "../../../core/meet/actions";
import { getBeer } from "../../../core/meet/selector";

const mapStateToProps = (state) => ({
  weather: state.reducer.weather,
  beer: getBeer(state)
});

const mapDispatchToProps = {
  getWeatherAction,
  getBeerAction,
  setMeetAction
};


export default connect(mapStateToProps, mapDispatchToProps)(Create);
