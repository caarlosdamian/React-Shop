import React from "react";
import "./login.css.js";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { useStyles } from "./login.css";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions.js";
import { useHistory } from "react-router-dom";
import { getAuth } from "../../redux/selectors/index.js";

const initValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { loggedIn } = useSelector(getAuth);
  let history = useHistory();
  const [formData, handleChange] = useForm(initValues);
  const dispatch = useDispatch();
  const classes = useStyles();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    if (history.location.state === undefined) {
      history.goBack();
    }
  };
  if (loggedIn) {
    history.push(history.location.state?.from?.pathname)
  }
  return (
    <div className={classes.row}>
      <div className={classes.col}>
        <div className="card">
          <div className="card-body">
            <h2 className={classes.loginText}>Login</h2>
            <form onSubmit={onSubmit}>
              <div className={classes.formGgroup}>
                <TextField
                  label="Email"
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className={classes.formGgroup}>
                <TextField
                  label="Password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className="form-links">
                <Button
                  onClick={onSubmit}
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
        <span className={classes.span}>Not Register yet?</span>
        <Link className={classes.Link} to="/register">
          <span className={classes.span}>Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
