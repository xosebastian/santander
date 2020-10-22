import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NewEvent from "../../components/NewEvent";
import Weather from "../../components/Weather";
import Beer from "../../components/Beer";
import _ from "lodash";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const Create = (props) => {
  const {
    getWeatherAction,
    getBeerAction,
    setMeetAction,
    weather,
    beer,
  } = props;

  useEffect(() => {
    _.isEmpty(weather) && getWeatherAction();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography gutterBottom variant="h5" component="h2">
            Crear Meetups
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Weather weather={weather}></Weather>
          <Divider />
          <Beer beer={beer}></Beer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewEvent
            getWeather={getWeatherAction}
            getBeer={getBeerAction}
            setMeet={setMeetAction}
          ></NewEvent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Create;
