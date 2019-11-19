import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return(
    <div className="content">
      <ul>
        <Link to='/'>
          <li>Main page</li>
        </Link>
        <Link to='/posts'>
          <li>Posts</li>
        </Link>
        <Link to='/todos'>
          <li>To do list</li>
        </Link>
        <Link to='/profile'>
          <li>Profile</li>
        </Link>

      </ul>
    </div>
    
  )

}

export default Nav;