import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { LoginAction } from "../../../core/meet/actions";

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
  const { LoginAction } = props;
  const classes = useStyles();
  const [login, setLogin] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);

  const handleLogin = () => {
    const { username, password } = login;

    if (username && password) {
    } else {
      setError(true);
      return;
    }
  };

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
            required
            fullWidth
            label="Usuario"
            name="user"
            color="secondary"
            autoComplete="Usuario"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            autoFocus
          />
          <TextField
            variant="outlined"
            color="secondary"
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
            color="secondary"
            className={classes.submit}
            onClick={() => LoginAction(login)}
          >
            Ingresar
          </Button>
          {error && <h1>asdasd</h1>}
        </form>
      </div>
    </Container>
  );
};

export default Login;
