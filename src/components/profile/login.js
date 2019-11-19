import React from 'react';

export default function Login({login, password, changeLogin, changePassword, submitForm,}) {


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