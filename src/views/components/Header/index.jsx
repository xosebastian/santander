import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = (props) => {
  const classes = useStyles();
  const {
    auth,
    auth: { role },
  } = props;

  // console.log(role);

  return (
    <div className={classes.root}>
      <AppBar elevation={1} position="static" color={"secondary"}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          {!_.isEmpty(auth) ? (
            <Button color="primary" component={Link} to={"/login"}>
              Ingresar
            </Button>
          ) : (
            /* role == "admin"*/ true && (
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={"/create"}
                endIcon={<AddIcon />}
              >
                Crear Evento
              </Button>
            )
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.reducer.auth,
});

export default connect(mapStateToProps)(Header);
