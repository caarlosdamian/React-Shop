import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h2 className="login-text">
                            SIGN IN
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>User</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="User"
                                    name="user"
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                />
                            </div>
                            <div className="form-links">
                                <Link to="/home" className="btn">
                                    Sign in
                                </Link>
                                <Link to="/register" className="second-btn">
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;