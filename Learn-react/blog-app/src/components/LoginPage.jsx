import React from "react";

import { useParams } from "react-router-dom";

function LoginPage() {

    const {userEmail,userPassword} = useParams();

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" value={userEmail} required />
          <input type="text" placeholder="Password" value={userPassword} required />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
