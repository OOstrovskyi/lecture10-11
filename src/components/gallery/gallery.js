import React from "react";
import "./gallery.css"
import PropTypes from 'prop-types';

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

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}