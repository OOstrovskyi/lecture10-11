import React from "react";
import {Redirect} from 'react-router-dom';
import {axiosRequest} from '../requests/axios';

const url = 'https://jsonplaceholder.typicode.com/users';

export default (Component) => class extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        user: [],
      };
    }

    componentDidMount() {
      axiosRequest(url)
        .then((response) => {
          this.setState({ user: response.filter(user => user.id===1) })
        })
    }

    render(){
      if (localStorage.getItem('isLogin')==='0') {
        return <Redirect to='/login' />
      }

      const { user } = this.state;

      return (
        <Component {...this.props} user={user} />
        )
    }
  
}