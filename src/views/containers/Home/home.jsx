import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Event from "../../components/Event";
import Typography from "@material-ui/core/Typography";

function Home(props) {
  const { meet } = props;

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" component="h2">
            Últimos eventos
          </Typography>
        </Grid>
        {meet.map((item) => (
          <Grid key={item.id} item xs={6} sm={4}>
            <Event {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
