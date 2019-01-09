import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div>
      <Link to="/">Tracks</Link>
      <Link to="/about">About</Link>    
    </div>
  ); 
};

export default Menu;