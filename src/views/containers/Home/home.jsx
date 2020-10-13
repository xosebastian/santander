import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Event from "../../components/Event";

function Home(props) {


  console.log(props);


  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <h1>Hola :) ¿en qué te podemos ayudar hoy?</h1>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Event />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Event />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Event />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Event />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Event />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Event />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Event />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Event />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Event />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
