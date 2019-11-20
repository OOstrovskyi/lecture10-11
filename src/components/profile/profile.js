import React from "react";
import PropTypes from 'prop-types';

export default function Profile({ user }) {

  return (
    <div className="content">
      {user.map(el =>
        <div key={el.id}>
          <p>Hello, {el.name}</p>
          <p>Login: {el.username}</p>
          <p>e-mail: {el.email}</p>
          <p>adress: {el.address.street}, {el.address.suite}, {el.address.city}, {el.address.zipcode}</p>
          <p>phone, {el.phone}</p>
          <p>website: {el.website}</p>
          <p>company: {el.company.name}, {el.company.catchPhrase}, {el.company.bs}</p>
        </div>
      )}
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        suite: PropTypes.string,
        city: PropTypes.string,
        zipcode: PropTypes.string
      }),
      company: PropTypes.shape({
        name: PropTypes.string,
        catchPhrase: PropTypes.string,
        bs: PropTypes.string
      })
    })
  )
}
