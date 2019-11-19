import React, { Component } from "react";
import {axiosRequest} from '../../requests/axios';
import "./gallery.css"

const url = 'https://jsonplaceholder.typicode.com/photos';

export class GalleryOld extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: [],
            isLoading: false,
          };
    }

    componentDidMount() {
        this.setState({isLoading: true})
      
        axiosRequest(url).then(res => {
          this.setState({ images: res.data.filter(image => image.albumId===1), isLoading: false})
        })
        .catch(error => {
          console.log(error)
        });
    }

    render() {
        const { images, isLoading } = this.state;
        if (isLoading) {
          return <p>Loading ...</p>;
        }
      
        return (
          <div className="gallery">
            {images.map(img =>
              <figure className="photo" key={img.id}>
              <a href={img.url}>
                <img src={img.thumbnailUrl} alt={img.title} />
              </a>
              <figcaption>{img.albumId}/{img.id} {img.title}</figcaption>
            </figure>
            )}
          </div>
        );
    }
}


export default function Gallery({ images }) {
  return (
    <div className="gallery">
    {images.map(img =>
      <figure className="photo" key={img.id}>
      <a href={img.url}>
        <img src={img.thumbnailUrl} alt={img.title} />
      </a>
      <figcaption>{img.albumId}/{img.id} {img.title}</figcaption>
    </figure>
    )}
  </div>
  );
}