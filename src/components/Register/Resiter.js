import React from 'react';
import {Link} from 'react-router-dom'
import './register.css';

const Register = () => {
    return ( 
        <div className="row register-form">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="register-text">
                            REGISTER
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Lastname</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Lastname"
                                    name="lastname"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Write a password"
                                    name="password"
                                />
                            </div>

                            <div className="form-group">
                                <label>Confirm password</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Confirm your password"
                                    name="confirmation"
                                />
                            </div>
                            <div id="register">
                                <Link to="/home" className="btn-register">
                                    Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Register;