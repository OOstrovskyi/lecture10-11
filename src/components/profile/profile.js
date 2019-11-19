import React from "react";


export default function Profile ({ user }) {

        
    return (

      <div className="content">
        {user.map( el => 
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


