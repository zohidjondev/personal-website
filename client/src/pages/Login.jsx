import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button className="button" >Login</button>
        <div className="error-message">
          <p>This is an error</p>
        </div>
        <span>
          Don't have an account?{" "}
          <Link to={"/register"}>
            <a>Register</a>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
