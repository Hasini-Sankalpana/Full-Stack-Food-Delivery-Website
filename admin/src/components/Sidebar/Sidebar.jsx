import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
    rel="stylesheet"/>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
        <i className="ri-add-circle-line"></i>
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
        <i className="ri-shopping-bag-2-line"></i>
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
        <i className="ri-file-check-line"></i>
          <p>Orders</p>
        </NavLink>
      </div>

    </div>
  )
}

export default Sidebar