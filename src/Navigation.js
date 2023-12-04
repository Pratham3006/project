import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/judge">Judge</Link>
      </li>
      <li>
        <Link to="/lawyer">Lawyer</Link>
      </li>
      <li>
        <Link to="/Admin">Admin</Link>
      </li>
      <li>
        <Link to="/Home">Home</Link>
      </li>
    </ul>
  );
}

export default Navigation;
