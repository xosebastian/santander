import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "../../../../public/meet-beer-1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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

const View = (props) => {
  const classes = useStyles();

  const {
    location: {
      state: { id },
    },
    auth,
    setGuestAction,
    meet,
  } = props;

  const meets = _.find(meet, (o) => o.id == id);

  const { place, time, date, guest, guestList } = meets;

  const [guests, setGuests] = useState("");

  const handleGuestChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography gutterBottom variant="h5" component="h2">
            Challenge Meetups
          </Typography>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Card>
            <CardMedia
              className={classes.media}
              image={Image}
              title="Challenge Meetups"
            />

            <CardContent>
              <div className={classes.chips}>
                <Chip icon={<EventIcon />} label={date} color="primary" />
                <Chip icon={<AccessTimeIcon />} label={time} color="primary" />
                <Chip icon={<LocationOnIcon />} label={place} color="primary" />
                <Chip
                  icon={<FaceIcon />}
                  label={`${guest} invitados`}
                  color="primary"
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Invitados
              </Typography>
              {!_.isEmpty(auth) &&
                auth.role == "user" &&
                !_.find(guestList, (o) => o.name == auth.name) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setGuestAction({ name: auth.name, id })}
                  >
                    Inscribirse
                  </Button>
                )}

              {!_.isEmpty(auth) && auth.role == "admin" && (
                <>
                  <TextField
                    label="Nombre"
                    type="text"
                    value={guests}
                    onChange={handleGuestChange}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      guests && setGuestAction({ name: guests, id })
                    }
                  >
                    Invitar
                  </Button>
                </>
              )}
              <div className={classes.chips}>
                {guestList.map((o) => (
                  <Chip icon={<FaceIcon />} key={o.name} label={o.name} color="Secondary" />
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );

};

export default View;
