import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to reset password
    console.log(`Reset password for ${email}`);
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Email *</label>
        <input className="form-control form-control-sm"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <button className="btn btn-primary btn-sm" type="submit">Xác nhận</button>
      </form>
      <div>
      <Link to="/login"><label htmlFor="">Login</label></Link>
      </div>
    </div>
  );
}

export default ForgotPassword;