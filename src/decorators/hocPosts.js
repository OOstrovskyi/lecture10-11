import React from 'react';
import {axiosRequest} from '../requests/axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export default (Component) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
      
    axiosRequest(url).then(res => {
      this.setState({ posts: res})
    })
    
  }

  render() {
    const { posts } = this.state;
    return (
      <Component {...this.props} posts={posts} />
    );
  }
};