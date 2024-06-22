import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';



const Navbar = () => {

    const [menu, setMenu] = useState("home");
  return (
    
    <div className='navbar'>
        <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
    rel="stylesheet"/>
         <h2>SALTY <i className="ri-bowl-fill"></i></h2>
         <ul className="navbar-menu">
                <li onClick={() =>setMenu("home")} className={menu == "home"?"active":""}>Home</li>
                <li onClick={() =>setMenu("menu")} className={menu == "menu"?"active":""}>Menu</li>
                <li onClick={() =>setMenu("mobile-app")} className={menu == "mobile-app"?"active":""}>Mobile App</li>
                <li onClick={() =>setMenu("contact-us")} className={menu == "contact-us"?"active":""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src= {assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                   <div className="dot">

                   </div>
                </div>
                <button>Sign In</button>
            </div>
    </div>
  )
}

export default Navbar