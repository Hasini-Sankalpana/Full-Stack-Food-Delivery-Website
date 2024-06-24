import React from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
       <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
    rel="stylesheet"/>
     <h2>SALTY <i className="ri-bowl-fill"></i></h2>
      <img src={assets.profile_image} alt="" className='profile'/>
    </div>
  )
}

export default Navbar