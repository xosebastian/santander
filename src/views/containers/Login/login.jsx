import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const { LoginAction, authError } = props;

  const classes = useStyles();
  const [login, setLogin] = useState({ username: "", password: "" });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            autoComplete="off"
            required
            fullWidth
            label="Usuario"
            name="user"
            color="primary"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            autoFocus
          />
          <TextField
            variant="outlined"
            color="primary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => LoginAction(login)}
          >
            Ingresar
          </Button>
          {authError && (
            <Alert severity="error">
              <AlertTitle>Usuario y Contraseña incorrectos</AlertTitle>
              Podes probar con — <strong>admin:admin</strong> o{" "}
              <strong>user:user</strong>
            </Alert>
          )}
        </form>
      </div>
    </Container>
  );
};

export default Login;
