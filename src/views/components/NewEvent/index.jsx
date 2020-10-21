import "date-fns";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import moment from "moment";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.2),
    },
  },
}));

export default function NewEvent(props) {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [guests, setGuests] = useState("");
  const [place, setPlace] = useState("");

  const handleTimeChange = (time) => {
    setTime(time);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleGuestChange = (event) => {
    setGuests(event.target.value);
    props.getBeer(event.target.value);
  };

  const handleDateChange = (date) => {
    let format = moment(date).format("YYYY-MM-DD");
    setDate(date);
    props.getWeather(format);
  };

  const handleSubmit = () => {
    var meet = {
      time: moment(date).format("hh:mm"),
      place: place,
      guest: guests,
      date: moment(date).format("YYYY-MM-DD"),
    };

    props.setMeet(meet);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <Grid container>
            <KeyboardDatePicker
              fullWidth
              format="MM/dd/yyyy"
              margin="normal"
              color="primary"
              label="Fecha"
              value={date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid container>
            <KeyboardTimePicker
              fullWidth
              margin="normal"
              color="primary"
              label="Horario"
              value={time}
              onChange={handleTimeChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid container>
          <TextField
            fullWidth
            margin="normal"
            label="Invitados"
            type="number"
            value={guests}
            onChange={handleGuestChange}
          />
        </Grid>

        <Grid container>
          <FormControl
            className={classes.formControl}
            fullWidth
            margin="normal"
          >
            <InputLabel id="demo-simple-select-label">Lugar</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={place}
              onChange={handlePlaceChange}
            >
              <MenuItem value={"Parque Patricios"}>Parque Patricios</MenuItem>
              <MenuItem value={"San Telmo"}>San Telmo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Añadir Evento
        </Button>
      </CardActions>
    </Card>
  );
}
