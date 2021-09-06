import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { register } from "../../redux/auth/reducer";
import { useStyles } from "./register.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const initValues = {
  displayName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, handleChange] = useForm(initValues);
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    history.push("/");
  };

  return (
    <div
      className={`${classes.registerForm} animate__animated animate__fadeInLeft`}
    >
      <div className={classes.col}>
        <div className="card">
          <div className="card-body">
            <h2 className={classes.registerText}>REGISTER</h2>
            <form onSubmit={onSubmit}>
              <div className={classes.formGgroup}>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="displayName"
                  onChange={handleChange}
                />
              </div>

              <div className={classes.formGgroup}>
                <TextField
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div className={classes.formGgroup}>
                <TextField
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div id="register">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
        <span className={classes.span}>Already member?</span>
        <Link className={classes.Link} to="/login">
          <span className={classes.span}>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
