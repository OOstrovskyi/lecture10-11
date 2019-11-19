import React from 'react';
import {Redirect} from 'react-router-dom';

export default (Component) => class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      redirect: false,
    };
  }

  changeLogin = (e) => {
    this.setState({login: e.target.value});
  }

  changePassword = (e) => {
    this.setState({password: e.target.value});
  }

  submitForm = (e) => {
    const {login, password} = this.state;
    if (login==='admin' && password==='admin'){
      this.setState({redirect: true})
      localStorage.setItem('isLogin', 1);
    }
    e.preventDefault();
  }

  render() {
    const {login, password, redirect} = this.state;

    if (redirect) {
      return <Redirect to='/profile' />
    }

    return (
      <Component {...this.props} login={login} password={password} 
        changeLogin={this.changeLogin} changePassword={this.changePassword} submitForm={this.submitForm}
      />
    );
  }
};