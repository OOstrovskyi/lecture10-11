import React from 'react';
import PropTypes from 'prop-types';

export default function Login({ login, password, changeLogin, changePassword, submitForm, }) {

  return (
    <div className="content">
      <form onSubmit={submitForm}>
        <label>
          Name:
            <input type="text" value={login} onChange={changeLogin} />
        </label>
        <br />
        <label>
          Password:
            <input type="password" value={password} onChange={changePassword} />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeLogin: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired
}