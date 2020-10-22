import React from "react";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import Typography from "@material-ui/core/Typography";

export default function Weather(props) {
  const { weather } = props;

  return (
    <>
      {weather && (
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" gutterBottom>
              Pronóstico para el{" "}
              {moment(weather.datetime).locale("es").format(`DD MMM YYYY`)}
              {"."}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4}>
            <div>
              <img
                src={require(`./images/weather-icons/${weather.weather.icon}.png`)}
                alt={weather.weather.description}
              />
            </div>
          </Grid>
          <Grid item xs={8} sm={8}>
            <Typography variant="h3"> {weather.max_temp} ºC </Typography>
            <Typography variant="h3"> {weather.min_temp} ºC </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" gutterBottom>
              {weather.weather.description}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}
