import React from 'react';
import AppleSignInButton from './AppleSignInButton';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="apple-signin-container">
        <AppleSignInButton />
      </div>
    </div>
  );
}

export default Login;
