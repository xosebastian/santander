import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image3 from "../../../../public/Daco_4535178.png";

export default function Beer(props) {
  const { beer } = props;

  return (
    <>
      {beer && (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h5" gutterBottom>
              Cantidad de cervezas
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <img src={Image3} width={100} />
          </Grid>
          <Grid item xs={6} sm={8}>
            <Typography variant="h3" gutterBottom>
              x{beer}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}
