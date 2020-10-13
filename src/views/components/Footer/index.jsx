import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


function Footer() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              After Work Birra Santander
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
