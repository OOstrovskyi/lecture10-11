import React from 'react';
import {axiosRequest} from '../requests/axios';

const url = 'https://jsonplaceholder.typicode.com/photos';

export default (Component) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
     
    axiosRequest(url).then(res => {
      this.setState({ images: res.filter(image => image.albumId===1)})
    })
}

  render() {
    const {images} = this.state;
    return (
      <Component {...this.props} images={images} />
    );
  }
};