import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Event from "../../components/Event";

function Home(props) {
  const { meet } = props;

  console.log(meet);
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <h1>Hola :) ¿en qué te podemos ayudar hoy?</h1>
        </Grid>

        {meet.map((item) => (
          <Grid key={item.id}  item xs={6} sm={4}>
            <Event {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
