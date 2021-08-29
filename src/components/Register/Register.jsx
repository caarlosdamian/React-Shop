import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./register.css";

const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.registerForm}>
      <div className={classes.col}>
        <div className="card">
          <div className="card-body">
            <h2 className={classes.registerText}>REGISTER</h2>
            <form>
              <div className={classes.formGgroup}>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>

              <div className={classes.formGgroup}>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Lastname"
                  name="lastname"
                />
              </div>

              <div className={classes.formGgroup}>
                <TextField
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>

              <div className={classes.formGgroup}>
                <TextField
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />
              </div>

              <div className={classes.formGgroup}>
                <TextField
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmation"
                />
              </div>
              <div id="register">
              <Link  className={classes.Link}to="/">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
