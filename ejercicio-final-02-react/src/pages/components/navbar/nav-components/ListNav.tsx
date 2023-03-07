import React from 'react';
import { Link } from 'react-router-dom';


export const ListNav: React.FC = () => {

  return (
    <ul className="UlNav rounded ">
      <li>
        <Link to={'/'}>Home</Link>
      </li>{" "}
      <li>
        <Link to="/shop">Products</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>{" "}
      <li>
        <Link to="/orders">My Orders</Link>
      </li>{" "}
    </ul>
  );
}