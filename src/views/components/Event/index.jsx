import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Image from '../../../../public/meet-beer-1.jpg'
import Image2 from '../../../../public/meet-beer-2.jpg'
import Image3 from '../../../../public/meet-beer-3.jpg'

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

const images = [Image, Image2, Image3]

export default function Event() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={images[~~(Math.random() * (2 - 0 + 1)) + 0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            After Work Birra Santander
          </Typography>
          <div className={classes.chips}>
            <Chip icon={<EventIcon />} label="20 de Julio" color="secondary" />
            <Chip
              icon={<LocationOnIcon />}
              label="Parque Patricios"
              color="secondary"
            />
            <Chip icon={<FaceIcon />} label="150 invitados" color="secondary" />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
