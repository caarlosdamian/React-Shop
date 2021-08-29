import React from "react";
import "./login.css.js";
import { Link } from "react-router-dom";
import { Button,TextField } from "@material-ui/core";
import {useStyles} from "./login.css"
const Login = () => {
 
  const classes = useStyles();

  return (
    <div className={classes.row}>
      <div className={classes.col}>
        <div className="card">
          <div className="card-body">
            <h2 className={classes.loginText}>Login</h2>
            <form>
              <div className={classes.formGgroup}>
                <TextField
                  id="standard-basic"
                  label="Username"
                  placeholder="Username"
                  name="Username"
                />
              </div>
              <div className={classes.formGgroup}>
                <TextField
                  id="standard-basic"
                  label="Password"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div className="form-links">
                <Link  className={classes.Link}to="/">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Link  className={classes.Link}to="/register">
          <span className={classes.span}>Not Register yet?</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
