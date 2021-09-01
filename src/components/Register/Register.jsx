import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { register } from "../../redux/actions/userActions";
import { useStyles } from "./register.css";

const initValues = {
  displayName: '',
  email: '',
  password: '',
}

const Register = () => {
  const [formData, handleChange] = useForm(initValues)
  const dispatch = useDispatch()

  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(register(formData))
  }
  return (
    <div className={classes.registerForm}>
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

              {/* <div className={classes.formGgroup}>
                <TextField
                  type="text"
                  className="form-control"
                  placeholder="Lastname"
                  name="lastname"
                  onChange={handleChange}
                />
              </div> */}

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

              {/* <div className={classes.formGgroup}>
                <TextField
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmation"
                />
              </div> */}
              <div id="register">
                {/* <Link  className={classes.Link}to="/"> */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                  >
                    Register
                  </Button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
          <span className={classes.span}>Already member?</span>
        <Link  className={classes.Link}to="/login">
        <span className={classes.span}>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
