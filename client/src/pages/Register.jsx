import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button className="button" >Register</button>
        <div className="error-message">
          <p>This is an error</p>
        </div>
        <span>
          Have an account?{" "}
          <Link to={"/Login"}>
            <a>Login</a>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
