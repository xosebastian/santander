import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import NewEvent from "../../components/NewEvent";
import Weather from "../../components/Weather";
import Beer from "../../components/Beer";
import { useDispatch } from "react-redux";
import _ from 'lodash';
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";


const Create = (props) => {
  const { getWeatherAction, getBeerAction, setMeetAction, weather, beer } = props;
  const dispatch = useDispatch();

  useEffect(() => {

    _.isEmpty(weather) && getWeatherAction();
    return () => {
      debugger;
      // !props.weather  && props.getWeatherAction();
      console.log(props);
    };
  }, []);


  console.log(props);


  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
        <Typography variant="h4" component="h2">
            Crear Evento
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Weather weather={weather}></Weather>
          <Divider />
          <Beer beer={beer}></Beer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <NewEvent getWeather={getWeatherAction} getBeer={getBeerAction} setMeet={setMeetAction}></NewEvent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Create;
